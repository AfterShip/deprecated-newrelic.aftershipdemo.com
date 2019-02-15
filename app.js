require('newrelic');
const Koa = require('koa');
const Router = require('koa-router');
const axios = require('axios')
const cors = require('@koa/cors');
const app = new Koa();
const router = new Router();

// logger
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
const {
 APP_NAME: APP_NAME = ''
} = process.env;

router.get('/', async (ctx, next) => {
  // ctx.router available
  ctx.body = `hello world ${APP_NAME}`;
}).get('/url/:url', async (ctx, next) => {
  // ctx.router available
  console.log(ctx.params.url);
  let response = await axios.get("http://"+ctx.params.url)
    .then(function (response) {
      console.log("==============response=============")
      console.log(response);
      ctx.body = response.data;
    })
    .catch(function (error) {
      console.log("==============error=============")
      console.log(error);
    });
});

app
  .use(router.routes())
  .use(router.allowedMethods());
app.use(cors());

app.listen(80);
