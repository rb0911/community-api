// const koa = require('koa')
// const path = require('path')

import koa from 'koa'
import JWT from 'koa-jwt'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import router from './routers/routers'
import koaBody from 'koa-body'
import jsonutil from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'
import compress from 'koa-compress'
import config from './config/index'
import errHandle from './common/ErrHandle'

const app = new koa()

const isDevMode = process.env.NODE_ENV === 'production' ? false : true

// app.use(helmet())
// app.use(statics(path.join(__dirname, './public')))
// app.use(router())

// 定义公共路径，不需要jwt 鉴权
const jwt = JWT({secret: config.JWT_SECERT}).unless({path: [/^\/public/, /\/login/]}) //, /\/login/

const niddleware = compose([
  koaBody(),
  statics(path.join(__dirname, './public')),
  cors(),
  jsonutil({pretty: false, param: 'pretty'}),
  helmet(),
  errHandle,
  jwt
])

if (!isDevMode) {
  app.use(compress())
}

app.use(niddleware)
app.use(router())

app.listen(3000)