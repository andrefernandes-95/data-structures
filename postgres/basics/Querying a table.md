You can write expressions, not just simple column references, in the select list. For example, you can do:

```sql
SELECT city, (temp_hi + temp_lo) / 2 AS temp_avg, date FROM weather;
```

This should give:

```
     city      | temp_avg |    date
---------------+----------+------------
 San Francisco |       48 | 1994-11-27
 San Francisco |       50 | 1994-11-29
 Hayward       |       45 | 1994-11-29
(3 rows)
```

Notice how the AS clause is used to relabel the output column. (The AS clause is optional.)

## Qualifying with WHERE

A query can be “qualified” by adding a WHERE clause that specifies which rows are wanted.

The usual Boolean operators (AND, OR, and NOT) are allowed in the qualification. For example, the following retrieves the weather of San Francisco on rainy days:

```sql
SELECT * FROM weather
WHERE city = 'San Francisco' AND prcp > 0.0;
```

## Ordering

You can request that the results of a query be returned in sorted order:

```sql
SELECT * FROM weather
ORDER BY city;
```

Outputs
```
     city      | temp_lo | temp_hi | prcp |    date
---------------+---------+---------+------+------------
 Hayward       |      37 |      54 |      | 1994-11-29
 San Francisco |      43 |      57 |    0 | 1994-11-29
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
```

In this example, the sort order isn't fully specified, and so you might get the San Francisco rows in either order. But you'd always get the results shown above if you do:

```sql
SELECT * FROM weather
ORDER BY city, temp_lo;
```

## Removing Duplicates

You can request that duplicate rows be removed from the result of a query:

```sql
SELECT DISTINCT city FROM weather;
```

Note: In some database systems, including older versions of PostgreSQL, the implementation of DISTINCT automatically orders the rows and so ORDER BY is unnecessary. But this is not required by the SQL standard, and current PostgreSQL does not guarantee that DISTINCT causes the rows to be ordered.

---

Source: https://www.postgresql.org/docs/current/tutorial-join.html