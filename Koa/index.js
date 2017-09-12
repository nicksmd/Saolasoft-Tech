/**
 * Created by quangh on 9/12/2017.
 */
/*
 https://github.com/koajs/examples
 */
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

app.use(async ctx =>{
    ctx.body = "Hello world"
});

app.listen(3000);