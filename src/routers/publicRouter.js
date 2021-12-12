import koaRouter from 'koa-router'
import PublicController from '../api/publicController'

const router = new koaRouter()
router.get('/getCaptcha', PublicController.getCaptcha)

module.exports = router