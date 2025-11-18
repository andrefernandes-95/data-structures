# Where vs Having

It is important to understand the interaction between aggregates and SQL's WHERE and HAVING clauses. The fundamental difference between WHERE and HAVING is this: 

- WHERE selects input rows before groups and aggregates are computed (thus, it controls which rows go into the aggregate computation)

- HAVING selects group rows after groups and aggregates are computed. 

Thus, the WHERE clause must not contain aggregate functions; it makes no sense to try to use an aggregate to determine which rows will be inputs to the aggregates. On the other hand, the HAVING clause always contains aggregate functions. (Strictly speaking, you are allowed to write a HAVING clause that doesn't use aggregates, but it's seldom useful. The same condition could be used more efficiently at the WHERE stage.)

| Clause     | When It Runs      | What It Filters | Can Use Aggregates? |
| ---------- | ----------------- | --------------- | ------------------- |
| **WHERE**  | *Before* grouping | Individual rows | ❌ **No**            |
| **HAVING** | *After* grouping  | Grouped results | ✔️ **Yes**          |

If you try to use an aggregate (like SUM, COUNT, MAX) inside a WHERE, SQL will fail — the aggregates don’t exist yet.

---

## 🧩 Analogy (Simple)

- WHERE = filter ingredients before cooking

- HAVING = taste the final dish and decide if it meets criteria