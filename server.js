// 第 1 步：创建一个 Vue 实例
const Vue = require('vue')
const Koa = require('koa');
const appServer = new Koa();
const renderer = require('vue-server-renderer').createRenderer()
const fs = require("fs")
const createApp = require("./app.js")

appServer.use(async (ctx, next) => {
    const app = createApp({
        url: ctx.request.header.host,
        title: "title定义"
    })
    renderer.renderToString(app, (err, html) => {
        console.log(html)
        if (err) {
            res.response.body = "服务器内部错误"
            return
        }
        ctx.response.body = html
    })
    await next()
})



appServer.listen(3000);
