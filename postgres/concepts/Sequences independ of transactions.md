# Sequences are independent of transactions

Sequences in PostgreSQL are designed to generate unique numbers quickly.

They are not transactional, meaning they increment even if the surrounding transaction later rolls back.

This ensures that every call to nextval() is globally unique, even under high concurrency.

# The concurrency problem

Imagine two transactions:

| Transaction | Action          | Sequence Value                      |
| ----------- | --------------- | ----------------------------------- |
| T1          | `nextval()` → 1 | 1 (reserved)                        |
| T2          | `nextval()` → 2 | 2 (reserved)                        |
| T1          | rollback        | row disappears, sequence still at 2 |
| T2          | commit          | row inserted with id = 2            |


If sequences rolled back with T1:

- The sequence would be reset to 1

- T2’s committed row would now have id = 2, but the sequence thinks the next value is 1

- The next insert could try to use id = 1, causing a unique constraint violation


## Takeaways

Gaps in IDs are normal and safe. You should not attempt to “fix” them in production.

For dev/test environments, you can reset sequences after truncating tables, but never in concurrent production environments.

Your transactional logic is still safe; sequences just keep incrementing independently.