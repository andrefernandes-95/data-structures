## Deletions

Rows can be removed from a table using the DELETE command. Suppose you are no longer interested in the weather of Hayward. Then you can do the following to delete those rows from the table:

```sql
DELETE FROM weather
WHERE city = 'Hayward'
```

One should be wary of statements of the form:

```sql
DELETE FROM tablename;
```

Without a qualification, DELETE will remove all rows from the given table, leaving it empty. **The system will not request confirmation before doing this!**
