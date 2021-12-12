// const koa = require('koa')
// const path = require('path')

import koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'

const app = new koa()
const router = require('./routers/routers')

app.use(helmet())
app.use(statics(path.join(__dirname, './public')))
app.use(router())

app.listen(3000)