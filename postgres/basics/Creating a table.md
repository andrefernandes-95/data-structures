## Creating Tables
```sql
CREATE TABLE weather (
    city VARCHAR(80),
    temp_lo int, --low temperature
    temp_hi int, --high temperature
    pcrp real, --precipitation
    date date
);
```

Notes:
- varchar(80) specifies a data type that can store arbitrary character strings up to 80 characters in length.
- date should be self-explanatory. (Yes, the column of type date is also named date. This might be convenient or confusing — you choose.)
- Consequently, type names are not key words in the syntax, except where required to support special cases in the SQL standard.

```sql
CREATE TABLE cities (
    name varchar(80),
    location point
);
```

- Point is an example of PostgreSQL specific data-type

## Dropping Tables

```sql
DROP TABLE tablename;
```
