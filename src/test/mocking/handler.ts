import { rest } from "msw";

const testingUsers = [
  {
    userId: 123,
    id: 35,
    title: "this is from msw",
    body: "bla bla",
  },
  {
    userId: 123,
    id: 35,
    title: "this is the second user from msw",
    body: "bla bla",
  },
];

export const handler = rest.get(
  "https://jsonplaceholder.typicode.com/posts",
  (req, res, ctx) => {
    return res(ctx.json(testingUsers));
  }
);
