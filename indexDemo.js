const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const cors = require('@koa/cors')
const koaBody = require('koa-body')
const json = require('koa-json')

// app.use(async ctx => {
//     console.log(ctx)
//     ctx.body = 'Hello world'
// })

router.prefix('/api')

router.get('/', ctx => {
    console.log(ctx)
    console.log(ctx.request)
    ctx.body = 'Hello api'
})

router.get('/api', ctx => {
    const params = ctx.request.query
    console.log(ctx)
    console.log(ctx.request)
    ctx.body = params
})

router.get('/async', async (ctx) => {
    let result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello world 2s later')
        }, 2000);
    })
    ctx.body = result
})

router.post('/post', async (ctx) => {
    let { body } = ctx.request
    console.log(body)
    console.log(cts.request)
    ctx.body = body
})


app.use(koaBody())
app.use(cors())
app.use(json({pretty: false, param: 'pretty'}))
app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)