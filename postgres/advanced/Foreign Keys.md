# Foreign Keys

Consider the following problem: 

> You want to make sure that no one can insert rows in the weather table that do not have a matching entry in the cities table. 

This is called maintaining the referential integrity of your data.

```sql

CREATE TABLE cities (
    name varchar(80) primary key,
    location point
);

CREATE TABLE weather (
    city varchar(80) references cities(name),
    temp_lo int,
    temp_hi int,
    prcp real,
    date date
);

```

Making correct use of foreign keys will definitely improve the quality of your database applications, so you are strongly encouraged to learn about them.
