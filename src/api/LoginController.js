import send from '../config/MailConfig';
import moment from 'moment';
class LoginController {
  constructor () {}
  async forget (ctx) {
    const { body } = ctx.request
    try {
      // body.user -> database -> email
      let result = await send ({
        code: '1234',
        expire: moment().add(30, 'minute').format('YYYY-MM-DD HH:mm:ss'),
        email:  body.username,
        user: 'Robin',
        url: 'https://www.robin0911.com',
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
}

export default new LoginController ()
