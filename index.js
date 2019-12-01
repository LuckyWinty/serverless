const Koa = require("koa");
const serverless = require("serverless-http");
const app = new Koa();
const router = require('./router');

app
  .use(router.routes())
  .use(router.allowedMethods())

const handler = serverless(app);
exports.main_handler = async (event, context, callback) => {
  return await handler(
    { ...event, queryStringParameters: event.queryString },
    context
  );
}
