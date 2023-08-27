import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import * as reducer from "./store";

async function deleteTodo(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  const id = +request.params.id;

  await reducer.deleteTodo(id);

  return { body: "delete done" };
}

app.http("deleteTodo", {
  methods: ["DELETE"],
  authLevel: "anonymous",
  route: "todos/{id}",
  handler: deleteTodo,
});
