import koaRouter from 'koa-router'
import PublicController from '../api/publicController'

const router = new koaRouter()

router.prefix('/public')
router.get('/getCaptcha', PublicController.getCaptcha)

module.exports = router