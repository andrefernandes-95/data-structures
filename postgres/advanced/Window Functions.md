# Window Functions

A window function is a SQL function that performs a calculation across a set of rows related to the current row, without collapsing those rows into a single output like a regular aggregate function would.

- It looks at multiple rows (“the window”) while still returning a value for every individual row.

- It can compute things like running totals, rankings, moving averages, comparisons, and other analytics that need context from neighboring rows.

- Unlike GROUP BY, it does not combine rows—each row keeps its identity.

You define the "window" using the OVER clause, which can include:

- PARTITION BY — divides rows into groups (like grouping, but without collapsing).

- ORDER BY — defines the row order within each partition.

- ROWS/RANGE — defines a frame of rows relative to the current row.

```sql
SELECT depname, empno, salary, 
avg(salary) OVER (PARTITION BY depname)
FROM empsalary;
```

This calculates the average salary per department, but instead of returning one row per department, it returns one row per employee, adding the department salary average to each row.

```
 depname  | empno | salary |          avg
-----------+-------+--------+-----------------------
 develop   |    11 |   5200 | 5020.0000000000000000
 develop   |     7 |   4200 | 5020.0000000000000000
 develop   |     9 |   4500 | 5020.0000000000000000
 develop   |     8 |   6000 | 5020.0000000000000000
 develop   |    10 |   5200 | 5020.0000000000000000
 personnel |     5 |   3500 | 3700.0000000000000000
 personnel |     2 |   3900 | 3700.0000000000000000
 sales     |     3 |   4800 | 4866.6666666666666667
 sales     |     1 |   5000 | 4866.6666666666666667
 sales     |     4 |   4800 | 4866.6666666666666667
(10 rows)
```

You can also control the order in which rows are processed by window functions using ORDER BY within OVER. (The window ORDER BY does not even have to match the order in which the rows are output.) Here is an example:

```sql
SELECT depname, empno, salary,
row_number() OVER (PARTITION BY depname ORDER BY salary DESC)
FROM empsalary;
```

```
  depname  | empno | salary | row_number
-----------+-------+--------+------------
 develop   |     8 |   6000 |          1
 develop   |    10 |   5200 |          2
 develop   |    11 |   5200 |          3
 develop   |     9 |   4500 |          4
 develop   |     7 |   4200 |          5
 personnel |     2 |   3900 |          1
 personnel |     5 |   3500 |          2
 sales     |     1 |   5000 |          1
 sales     |     4 |   4800 |          2
 sales     |     3 |   4800 |          3
(10 rows)
```

- Window functions execute after non-window aggregate functions. This means it is valid to include an aggregate function call in the arguments of a window function, but not vice versa.

When a query involves multiple window functions, it is possible to write out each one with a separate OVER clause, but this is duplicative and error-prone if the same windowing behavior is wanted for several functions. Instead, each windowing behavior can be named in a WINDOW clause and then referenced in OVER. For example:

```sql
SELECT sum(salary) OVER w, 
    avg(salary) OVER w
FROM empsalary
WINDOW w AS (PARTITION BY depname ORDER BY salary DESC);
```
