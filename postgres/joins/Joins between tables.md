## Joins
Queries can access multiple tables at once, or access the same table in such a way that multiple rows of the table are being processed at the same time. 

Queries that access multiple tables (or multiple instances of the same table) at one time are called join queries. They combine rows from one table with rows from a second table, with an expression specifying which rows are to be paired.

```sql
SELECT * FROM weather JOIN cities ON city = name;
```

```
     city      | temp_lo | temp_hi | prcp |    date    |     name      | location
---------------+---------+---------+------+------------+---------------+-----------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27 | San Francisco | (-194,53)
 San Francisco |      43 |      57 |    0 | 1994-11-29 | San Francisco | (-194,53)
(2 rows)
```

Note:

- There is no result row for the city of Hayward. This is because there is no matching entry in the cities table for Hayward, so the join ignores the unmatched rows in the weather table.


There are two columns containing the city name. This is correct because the lists of columns from the weather and cities tables are concatenated. In practice this is undesirable, though, so you will probably want to list the output columns explicitly rather than using *:


```sql

SELECT city, temp_lo, temp_hi, prcp, date, location
FROM weather JOIN cities ON city = name;

```

Since the columns all had different names, the parser automatically found which table they belong to. If there were duplicate column names in the two tables you'd need to qualify the column names to show which one you meant, as in:

```sql

SELECT weather.city, weather.temp_lo, weather.temp_hi,
weather.prcp, weather.date, cities.location

FROM weather JOIN cities ON weather.city = cities.name;

```

It is widely considered good style to qualify all column names in a join query, so that the query won't fail if a duplicate column name is later added to one of the tables.

## Left Outer Join

Now we will figure out how we can get the Hayward records back in. What we want the query to do is to scan the weather table and for each row to find the matching cities row(s). 

If no matching row is found we want some “empty values” to be substituted for the cities table's columns. This kind of query is called an outer join. (The joins we have seen so far are inner joins.) The command looks like this:

```sql
SELECT * FROM weather
LEFT OUTER JOIN cities ON weather.city = cities.name;
```

```
     city      | temp_lo | temp_hi | prcp |    date    |     name      | location
---------------+---------+---------+------+------------+---------------+-----------
 Hayward       |      37 |      54 |      | 1994-11-29 |               |
 San Francisco |      46 |      50 | 0.25 | 1994-11-27 | San Francisco | (-194,53)
 San Francisco |      43 |      57 |    0 | 1994-11-29 | San Francisco | (-194,53)
(3 rows)
```

This query is called a left outer join because the table mentioned on the left of the join operator will have each of its rows in the output at least once, whereas the table on the right will only have those rows output that match some row of the left table. When outputting a left-table row for which there is no right-table match, empty (null) values are substituted for the right-table columns.

Exercise:  There are also right outer joins and full outer joins. Try to find out what those do.

## Right Outer Join

A right outer join is similar to a left outer join, except it preserves all rows from the table on the right side of the join, whether they find a match or not.

The table on the right will appear fully in the result.

The table on the left will only contribute rows that match.

If a right-table row has no matching left-table row, the left-table columns will be returned as NULL.

```sql
SELECT *
FROM weather
RIGHT OUTER JOIN cities ON weather.city = cities.name;
```

Return every row from cities, and match any rows from weather.

If a city has no weather entry, the weather columns become NULL.

## Full Outer Join

A full outer join returns all rows from both tables, regardless of whether they match.

- Rows with matches behave like a normal join.
- Rows from the left table with no right-table match show NULL for right-table columns.
- Rows from the right table with no left-table match show NULL for left-table columns.

This join is essentially the union of a left outer join + right outer join.

```sql
SELECT *
FROM weather
FULL OUTER JOIN cities ON weather.city = cities.name;
```

Return all cities and all weather entries—even if they do not match—and fill in missing values with NULL.


## Cheat Sheet

| Join Type       | Rows kept from left table | Rows kept from right table | NULLs introduced when no match |
| --------------- | ------------------------- | -------------------------- | ------------------------------ |
| **INNER JOIN**  | Only matching rows        | Only matching rows         | Never                          |
| **LEFT OUTER**  | All rows                  | Only matching rows         | Right side columns             |
| **RIGHT OUTER** | Only matching rows        | All rows                   | Left side columns              |
| **FULL OUTER**  | All rows                  | All rows                   | Both sides                     |
