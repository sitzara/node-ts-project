import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';


const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next): Promise<void> => {
  ctx.status = 200;
  ctx.body = 'Hello, world!';
  next();
});

app.use(bodyParser({
  onerror: (err, ctx): void => {
    ctx.throw('body parse error', err, 422);
  }
}));

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);

export default app;
