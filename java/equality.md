# Understanding `==` vs `.equals()` in Java

In Java, comparing strings using `==` can lead to unexpected results.
This is because:

-   `==` checks **reference equality** --- whether two variables point
    to the **same object in memory**.
-   `.equals()` checks **content equality** --- whether the sequences of
    characters are identical.

## Why `==` Fails for Most String Comparisons

When you write:

``` java
String a = "pdf";
String b = new String("pdf");

System.out.println(a == b);       // false
System.out.println(a.equals(b));  // true
```

-   `a` refers to a **string literal** stored in the Java string pool.
-   `b` refers to a **new String object**, even though it contains the
    same characters.

Because these are *different objects*, `a == b` evaluates to `false`.

## When `==` Might Return `True`

The following works:

``` java
"pdf" == "pdf"; // true
```

This is because both are **string literals**, and Java interns literals
into a shared memory pool. They point to the same reference --- but this
is an exception, not the rule.

## Best Practice

Always use `.equals()` (or `.equalsIgnoreCase()`) to compare strings:

``` java
if ("pdf".equals(extension)) {
    // Correct string comparison
}
```

This ensures you compare **content**, not memory references.

## Summary

  Comparison Method       What It Checks                      Recommended?
  ----------------------- ----------------------------------- --------------
  `==`                    Reference equality                  ❌ No
  `.equals()`             Content equality                    ✅ Yes
  `.equalsIgnoreCase()`   Case-insensitive content equality   ✅ Yes

Using `==` for strings is a common source of bugs --- always use
`.equals()` for reliable text comparison.
