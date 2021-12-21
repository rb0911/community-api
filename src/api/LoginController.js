import send from '../config/MailConfig'
import moment from 'moment'
import jsonwebtoken from 'jsonwebtoken'
import config from '../config/index'
import { checkCode } from '../common/utils'
import User from '../model/User'

class LoginController {
  constructor () {}

  async forget (ctx) {
    const { body } = ctx.request
    try {
      // body.user -> database -> email
      let result = await send({
        code: '1234',
        expire: moment()
          .add(30, 'minute')
          .format('YYYY-MM-DD HH:mm:ss'),
        email: body.username,
        user: 'Robin',
        url: 'https://www.robin0911.com'
      })
      ctx.body = {
        code: 200,
        data: result,
        msg: '邮件发送成功。'
      }
    } catch (e) {
      console.log(e)
    }
  }

  async login (ctx) {
    // const { body } = ctx.request
    // let sid = body.sid
    // let code = body.code
    // checkCode(sid, code)
    // console.log('Hello login')
    // let token = jsonwebtoken.sign({_id: 'robin'}, config.JWT_SECRET, {
    //   expiresIn: '1d'
    // })
    // ctx.body = {
    //   code: 200,
    //   token: token
    // }

    const { body } = ctx.request
    let sid = body.sid
    let code = body.code

    if (checkCode(sid, code)) {
      // 验证用户账户密码是否正确， 
      let checkUserPasswd = ''
      let user = await User.findOne({username: body.username})

      if (user.password === body.password) {
        checkUserPasswd = true
      }

      console.log('验证通过')
      if (checkUserPasswd) {
        console.log('hello login')
        let token = jsonwebtoken.sign({_id: 'robin'},
        config.JWT_SECERT, {
          expiresIn: '1d'
        })

        ctx.body = {
          code: 200,
          token: token
        }

      } else {
        ctx.body = {
          code: 401,
          msg: "用户名或者密码不正确"
        }
      }
    } else {
      ctx.body = {
        code: 401,
        msg: "图片验证码不正确"
      }
    }

    let token = jsonwebtoken.sign(
      { _id: 'robin', exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 },
      config.JWT_SECERT
    )

    ctx.body = {
      token,
      code: 200
    }
  }
}

export default new LoginController()
