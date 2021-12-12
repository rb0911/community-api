import svgCaptcha from 'svg-captcha'

class PubicController {
    constructor() {}
    async getCaptcha(ctx){
        const newCaptcha = svgCaptcha.create({})
        ctx.body = {
            msg: newCaptcha
        }
    }
}

module.exports = new PubicController()