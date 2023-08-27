import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import * as reducer from "./store";

async function getTodos(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  const sort = request.query.get("sort");
  const start = request.query.get("start");

  let todos = reducer.getTodos();

  if (start) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(start)) {
      todos = todos.filter((todo) => todo.created_at >= start);
    }
  }
  if (sort === "asc") {
    todos = todos.sort((a, b) => a.created_at.localeCompare(b.created_at));
  } else if (sort === "desc") {
    todos = todos.sort((b, a) => a.created_at.localeCompare(b.created_at));
  }

  return { body: JSON.stringify({ todos, called: "getTodos" }, null, 2) };
}

app.http("getTodos", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "todos",
  handler: getTodos,
});
