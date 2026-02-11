/**
 
🧪 Exercise: Flatten nested comments

const comments = [
  {
    id: 1,
    text: "A",
    replies: [
      { id: 2, text: "B", replies: [] }
    ]
  }
]

👉 Return flat array of all comments.
 */
const flattenComments = (comments) => {
  const flattened = [];

  comments.forEach((item) => {
    flattened.push({ id: item.id, text: item.text });

    if (item.replies.length) {
      flattened.push(...flattenComments(item.replies));
    }
  });

  return flattened;
};

const comments = [
  {
    id: 1,
    text: "A",
    replies: [
      {
        id: 2,
        text: "B",
        replies: [
          {
            id: 3,
            text: "C",
            replies: [],
          },
          {
            id: 4,
            text: "D",
            replies: [],
          },
        ],
      },
      {
        id: 5,
        text: "E",
        replies: [],
      },
    ],
  },
];

console.log(flattenComments(comments));

/**
 Mine works, but here's another way:

 const flattenComments = (comments) => {
  return comments.flatMap(c => [
    { id: c.id, text: c.text },
    ...flattenComments(c.replies)
  ])
}
 */
