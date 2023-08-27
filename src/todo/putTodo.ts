import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import { Todo } from "./store";
import * as reducer from "./store";

async function putTodo(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  const id = +request.params.id;
  const todo = reducer.getTodo(id);
  if (!todo) {
    throw new Error("todo is not exist");
  }

  // body取得
  // ※request.bodyもrequest.jsonも使えない模様
  const body = JSON.parse(await request.text());
  context.log(body);
  if (!body.title) {
    throw new Error("title is not exist");
  }

  reducer.putTodo(id, body.title, body.description);

  return { body: "put done" };
}

app.http("putTodo", {
  methods: ["PUT"],
  authLevel: "anonymous",
  route: "todos/{id}",
  handler: putTodo,
});
