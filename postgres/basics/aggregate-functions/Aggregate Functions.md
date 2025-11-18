# Aggregate Functions

Like most other relational database products, PostgreSQL supports aggregate functions. An aggregate function computes a single result from multiple input rows. For example, there are aggregates to compute the count, sum, avg (average), max (maximum) and min (minimum) over a set of rows.

As an example, we can find the highest low-temperature reading anywhere with:

```sql
SELECT max(temp_lo) FROM weather;
```

If we wanted to know what city (or cities) that reading occurred in, we might try:


```sql

SELECT city FROM weather WHERE temp_lo = max(temp_lo);     -- WRONG

```

- This will not work since the aggregate max cannot be used in the WHERE clause
-  This restriction exists because the WHERE clause determines which rows will be included in the aggregate calculation; so obviously it has to be evaluated before aggregate functions are computed

However, as is often the case the query can be restated to accomplish the desired result, here by using a subquery.

# Subquery

```sql
SELECT city FROM weather
WHERE temp_lo = (SELECT max(temp_lo) FROM weather);
```

```
     city
---------------
 San Francisco
(1 row)
```

This is OK because the subquery is an independent computation that computes its own aggregate separately from what is happening in the outer query.

---

Aggregates are also very useful in combination with GROUP BY clauses. For example, we can get the number of readings and the maximum low temperature observed in each city with:

```sql
SELECT city, count(*), max(temp_lo)
FROM weather
GROUP BY city;
```

```
     city      | count | max
---------------+-------+-----
 Hayward       |     1 |  37
 San Francisco |     2 |  46
(2 rows)
```

which gives us one output row per city. Each aggregate result is computed over the table rows matching that city. We can filter these grouped rows using HAVING:

```sql
SELECT city, count(*), max(temp_lo)
    FROM weather
    GROUP BY city
    HAVING max(temp_lo) < 40;
```

```
  city   | count | max
---------+-------+-----
 Hayward |     1 |  37
(1 row)
```

which gives us the same results for only the cities that have all temp_lo values below 40. 

## LIKE

Finally, if we only care about cities whose names begin with “S”, we might do:

```sql
SELECT city, count(*), max(temp_lo)
    FROM weather
    WHERE city LIKE 'S%'            -- (1)
    GROUP BY city;
```

```
     city      | count | max
---------------+-------+-----
 San Francisco |     2 |  46
(1 row)
```

- The LIKE operator does pattern matching.

# Filter

Another way to select the rows that go into an aggregate computation is to use FILTER, which is a per-aggregate option:

```sql
SELECT city, count(*) FILTER (WHERE temp_lo < 45), max(temp_lo)
    FROM weather
    GROUP BY city;
```

```
     city      | count | max
---------------+-------+-----
 Hayward       |     1 |  37
 San Francisco |     1 |  46
(2 rows)
```

FILTER is much like WHERE, except that it removes rows only from the input of the particular aggregate function that it is attached to. Here, the count aggregate counts only rows with temp_lo below 45; but the max aggregate is still applied to all rows, so it still finds the reading of 46.
