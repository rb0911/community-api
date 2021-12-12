"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'rb0911.nn@qq.com', // generated ethereal user
      pass: 'oyhzvlzmcuajbgga', // generated ethereal password
    },
  });

  let sendInfo = {
    code: '1234',
    expire: '2022-01-01',
    email: 'rb0911.nn@qq.com',
    user: 'Robin',
    url: 'https://www.robin0911.com'
  }

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <rb0911.nn@qq.com>', // sender address
    to: "1029939162@qq.com, 529177108@qq.com", // list of receivers
    subject: sendInfo.user !== '' ? `你好用户, ${sendInfo.user}, robin0911.com注册码` 
    : `robin0911.com注册码`, // Subject line
    text: "Hello world?", // plain text body
    html: `<div>
    <p>欢迎使用robin0911.com, 请点击以下连接进入验证</p>
    <button style="padding: 5px; background:#fafafa; 
    color: #b4b4b4;height:45px;width:100px;text-align:center;line-height:45px"><a href="${sendInfo.url}">立即重置密码</a></buton></div>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

export default main