# ✅ CASCADE

When the parent row is deleted or updated, the change automatically cascades to the child rows.

Example:

orders table references customers with ON DELETE CASCADE.

If you delete a customer → all their orders are automatically deleted.

Use when:
You want dependent data to be removed or updated automatically, preventing orphaned records.

# ❌ RESTRICT

The database prevents the deletion or update of a parent row if related child rows exist.

Example:

orders table references customers with ON DELETE RESTRICT.

If you try to delete a customer who has orders → the database blocks the action.

Use when:
You want to protect important linked data and avoid accidental deletion.

# In sum

| Action        | CASCADE                                                 | RESTRICT                      |
| ------------- | ------------------------------------------------------- | ----------------------------- |
| Delete parent | Deletes child rows automatically                        | **Error** if child rows exist |
| Update parent | Updates child rows automatically (if ON UPDATE CASCADE) | **Error** if child rows exist |
| Purpose       | Maintain consistency automatically                      | Prevent accidental data loss  |
