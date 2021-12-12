import svgCaptcha from 'svg-captcha'

class PubicController {
    constructor() {}
    async getCaptcha(ctx){
        const newCaptcha = svgCaptcha.create({
            size: 6,
            ignoreChars: '0o1il',
            color: true,
            noise: Math.floor(Math.random() * 3),
            width: 150,
            height: 50
        })
        ctx.body = {
            msg: newCaptcha
        }
    }
}

module.exports = new PubicController()