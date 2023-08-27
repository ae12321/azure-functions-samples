import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export const viewRequestData = (req : HttpRequest, title: string) => {

    const { body, headers, method, params, query, url, user } = req;

    return { body, headers, method, params, query, url, user, title }
}