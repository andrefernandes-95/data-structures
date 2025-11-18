Using the asterisk (*) in the SELECT statement is considered a bad practice when you embed SQL statements in the application code, such as Python, Java, or PHP for the following reasons:

- **Database performance**. Suppose you have a table with many columns and substantial data, the SELECT statement with the asterisk (*) shorthand will select data from all the columns of the table, potentially retrieving more data than required for the application.

- **Application performance**. Retrieving unnecessary data from the database increases the traffic between the PostgreSQL server and the application server. Consequently, this can result in slower response times and reduced scalability for your applications.

- While SELECT * is useful for off-the-cuff queries, it is widely considered bad style in production code, since adding a column to the table would change the results.

For these reasons, it is recommended to explicitly specify the column names in the SELECT clause whenever possible. This ensures that only the necessary data is retrieved from the database, contributing to more efficient and optimized queries.

The asterisk (*) shorthand should be reserved solely for the ad-hoc queries that examine data from the database.

----

*Source*
https://neon.com/postgresql/postgresql-tutorial/postgresql-select
