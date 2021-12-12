const combineRouters = require('koa-combine-routers')

const arouters = require('./aRouter')
const PubicController = require('./publicRouter')
import loginRouter from './loginRouter'

module.exports = combineRouters(
    arouters,
    PubicController,
    loginRouter
)