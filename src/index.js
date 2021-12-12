// const koa = require('koa')
// const path = require('path')

import koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
const router = require('./routers/routers')
import koaBody from 'koa-body'
import jsonutil from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'


const app = new koa()

// app.use(helmet())
// app.use(statics(path.join(__dirname, './public')))
// app.use(router())

const niddleware = compose([
  koaBody(),
  statics(path.join(__dirname, './public')),
  cors(),
  jsonutil({pretty: false, param: 'pretty'}),
  helmet()
])

app.listen(3000)