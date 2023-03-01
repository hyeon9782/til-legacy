import { rest } from "msw";

const todos = ["먹기", "자기", "놀기"];

export const handlers = [
  // 할일 목록
  rest.get("/todos", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),

  // 할일 추가
  rest.post("/todos", (req, res, ctx) => {
    todos.push(req.body);
    return res(ctx.status(201));
  }),

  // 할일 수정
  rest.put("/todos", (req, res, ctx) => {
    const id = req.params.id;
    const newTodo = todos.filter((todo) => todo);
    return res(ctx.status(201));
  }),

  // 할일 삭제
  rest.delete("/todos", (req, res, ctx) => {
    todos = [];
    return res(ctx.status(201));
  }),
];
