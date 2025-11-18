# Self Join

We can also join a table against itself. This is called a self join. 

Goal: Find employees who have the same manager.

Table: employees

| id | name  | manager_id |
| -- | ----- | ---------- |
| 1  | Alice | 3          |
| 2  | Bob   | 3          |
| 3  | Carol | NULL       |
| 4  | David | 2          |
| 5  | Eve   | 2          |

```sql
SELECT
    e1.name as employee_1,
    e2.name as employee_2,
    m.name as manager
FROM employees e1
JOIN employees e2
    ON e1.manager_id = e2.manager_id
    AND e1.id < e2.id -- avoid duplicates (A,B and B,A)
JOIN employees m
    on e1.manager_id = m.id;
```

Result:

| employee_1 | employee_2 | manager |
| ---------- | ---------- | ------- |
| Alice      | Bob        | Carol   |
| David      | Eve        | Bob     |

## Explanation

1. You’re comparing two rows from the same table

- e1 = one employee
- e2 = another employee
- You compare them to ask: “Do they share the same manager?”

2. The aliases make everything readable

- employees e1 → first copy of the table
- employees e2 → second copy
- employees m → lookup manager information
- Without aliases, you would need to repeat employees three times.

3. It demonstrates a real-world use case

- Self-joins commonly help you find:
- Parents and children
- Manager and employees
- Prerequisite relationships
- Overlapping events
- Rows that match on some condition inside the same table

# Other Example

Suppose we wish to find all the weather records that are in the temperature range of other weather records. So we need to compare the temp_lo and temp_hi columns of each weather row to the temp_lo and temp_hi columns of all other weather rows. We can do this with the following query:

```sql

SELECT w1.city, w1.temp_lo AS low, w1.temp_hi AS high,
       w2.city, w2.temp_lo AS low, w2.temp_hi AS high
    FROM weather w1 JOIN weather w2
        ON w1.temp_lo < w2.temp_lo AND w1.temp_hi > w2.temp_hi;

```

```
     city      | low | high |     city      | low | high
---------------+-----+------+---------------+-----+------
 San Francisco |  43 |   57 | San Francisco |  46 |   50
 Hayward       |  37 |   54 | San Francisco |  46 |   50
(2 rows)
```

Meaning:
- San Francisco (43-57) includes San Francisco (46-50)
- Hayward (37-54) includes San Francisco (46-50)
