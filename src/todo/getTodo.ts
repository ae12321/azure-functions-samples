import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import * as reducer from "./store";

async function getTodo(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  const id = +request.params.id;

  const todo = await reducer.getTodo(id);
  if (!todo) {
    return {
      status: 404,
      body: "todo not found",
    };
  }

  return {
    status: 200,
    body: JSON.stringify({ todo, called: "getTodo" }, null, 2),
  };
}

app.http("getTodo", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "todos/{id}",
  handler: getTodo,
});
