import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import { query } from "../utils/db";

async function getSample(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  const id = +request.params.id;

  let res = await query("select * from todo where id = $1", [1]);
  //   let res = 111;

  context.info(res.rows);

  return {
    status: 200,
    body: JSON.stringify({ called: "getSample" }, null, 2),
  };
}

app.http("getSample", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "sample",
  handler: getSample,
});
