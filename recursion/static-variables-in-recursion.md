# 📌 Local Variables in Recursion

Every time a recursive function is called, a new stack frame is created.
Local variables are re-created inside memory for each call.
Each call has its own independent copy of the local variable.

```c
int func(int n) {
    int x = 0;   // local variable
    if (n > 0) {
        x++;
        return func(n - 1) + x;
    }
    return 0;
}

int main() {
    int a = 5;
    printf("%d", func(a));
}
```

👉 In this case, x is always reset to 0 at each recursive call, so the effect of x++ is limited to that function call only.

# 📌 Static Variables in Recursion

Static variables are initialized only once, not every time the function is called.
They maintain their value across recursive calls.
There is only one copy of the static variable in memory.

```c
int func(int n) {
    static int x = 0;   // static variable
    if (n > 0) {
        x++;
        return func(n - 1) + x;
    }
    return 0;
}

int main() {
    int a = 5;
    printf("%d", func(a));
}
```

👉 Here, x retains its value between recursive calls. So, instead of resetting, x keeps incrementing across the recursion tree.

# 📌 Global Variables in Recursion

Global variables behave similarly to static variables in recursion.
They are accessible across all function calls and maintain a single copy throughout the program.
However, global variables reduce modularity and may cause unintended side effects.

```c
int x = 0;   // global variable

int func(int n) {
    if (n > 0) {
        x++;
        return func(n - 1) + x;
    }
    return 0;
}

int main() {
    int a = 5;
    printf("%d", func(a));
}
```

👉 In this case, x is updated in the same way as with the static variable, but now it is declared outside the function and visible to all parts of the program.

# 🎯 Example Comparison Table

| Variable Type | Scope           | Lifetime                       | Behavior in Recursion       |
| ------------- | --------------- | ------------------------------ | --------------------------- |
| Local         | Inside function | Created/destroyed on each call | Reset on every call         |
| Static        | Inside function | Entire program                 | Retains value across calls  |
| Global        | Whole program   | Entire program                 | Shared across all functions |
