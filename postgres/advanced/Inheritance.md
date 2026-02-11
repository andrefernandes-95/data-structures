# Inheritance

Inheritance is a concept from object-oriented databases. It opens up interesting new possibilities of database design.


```sql
CREATE TABLE cities (
  name       text,
  population real,
  elevation  int     -- (in ft)
);

CREATE TABLE capitals (
  state      char(2) UNIQUE NOT NULL
) INHERITS (cities);
```
