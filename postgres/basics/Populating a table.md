## Inserting Data

```sql
INSERT INTO weather VALUES ('San Francisco', 46, 50, 0.25, '1994-11-27');
```

Notes:
- Constants that are not simple numeric values usually must be surrounded by single quotes (')

## Alternative Syntax

```sql
INSERT INTO weather (city, temp_lo, temp_hi, pcrp, date)
VALUES ('San Francisco', 43, 57, 0.0, '1994-11-29');
```

Many developers consider explicitly listing the columns better style than relying on the order implicitly.

