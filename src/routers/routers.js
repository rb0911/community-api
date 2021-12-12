const combineRouters = require('koa-combine-routers')

const arouters = require('./aRouter')
const PubicController = require('./publicRouter')

module.exports = combineRouters(
    arouters,
    PubicController
)