import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import { Todo } from "./store";
import * as reducer from "./store";

async function postTodo(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  // body取得
  // ※request.bodyもrequest.jsonも使えない模様
  const body = JSON.parse(await request.text());
  if (!body.title) {
    throw new Error("title is not exist");
  }

  await reducer.pushTodos(body.title, body.description);

  return { body: "created" };
}

app.http("postTodo", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "todos",
  handler: postTodo,
});
