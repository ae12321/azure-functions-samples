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

  let todos = await reducer.getTodos();

  context.log(new Date(todos[0].created_at));

  if (start) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(start)) {
      todos = todos.filter(
        (todo) => new Date(todo.created_at) > new Date(start)
      );
    }
  }

  if (sort === "asc") {
    todos = todos.sort((a, b) =>
      new Date(a.created_at) < new Date(b.created_at) ? -1 : 1
    );
  } else if (sort === "desc") {
    todos = todos.sort((a, b) =>
      new Date(a.created_at) < new Date(b.created_at) ? 1 : -1
    );
  } else {
  }

  return { body: JSON.stringify({ todos, called: "getTodos" }, null, 2) };
}

app.http("getTodos", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "todos",
  handler: getTodos,
});
