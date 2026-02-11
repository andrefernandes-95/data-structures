const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

const preferences = [
  { userId: 1, theme: "dark" },
  { userId: 2, theme: "light" },
];

/**
 * Output
 * 
 * [
  { id: 1, name: "A", theme: "dark" },
  { id: 2, name: "B", theme: "light" }
]


Avoid nested loops
 */

const data = {};

const sourceData = users.concat(preferences);

for (const item of sourceData) {
  const { id, userId, ...rest } = item;

  const dataId = id ?? userId;

  data[dataId] = {
    ...data[dataId],
    ...rest,
  };
}

console.log(data);

/**
 
You normalized by id/userId — good thinking.

But output is an object, not array.

Better:

const map = new Map()

preferences.forEach(p => map.set(p.userId, p.theme))

return users.map(u => ({
  ...u,
  theme: map.get(u.id)
}))

 */
