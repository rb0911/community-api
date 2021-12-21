import svgCaptcha from 'svg-captcha'
import { getValue, setValue } from '../config/RedisConfig'

class PubicController {
    constructor() {}
    async getCaptcha(ctx){
        const body = ctx.request.query
        const newCaptcha = svgCaptcha.create({
            size: 4,
            ignoreChars: '0o1il',
            color: true,
            noise: Math.floor(Math.random() * 3),
            width: 150,
            height: 50
        })

        //保存图片验证码 设置超时时间 单位s
        setValue(body.sid, newCaptcha.text, 10 * 60)
        console.log('---------redis--------')
        console.log(body.sid, newCaptcha.text)
        // getValue(body.sid).then(res => {
        //     console.log(res)
        // })
        ctx.body = {
            msg: newCaptcha
        }
    }
}

module.exports = new PubicController()