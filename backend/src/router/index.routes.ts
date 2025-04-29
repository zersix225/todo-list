import { Hono } from "hono";
// import { todoRouter } from "./todo.routes.ts";
import { GetTodo, AddTodo, EditTodoName, DeleteTodo, CompleteTodo } from "../controller/todo.controller.ts";

const mainRouter = new Hono();

mainRouter.get("/todos", GetTodo);
mainRouter.post("/todos", AddTodo);
mainRouter.put("/todos/edit/:id", EditTodoName);
mainRouter.put("/todos/complete/:id", CompleteTodo);
mainRouter.delete("/todos/:id", DeleteTodo);

export { mainRouter };
