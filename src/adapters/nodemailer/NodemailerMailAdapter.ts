import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from 'nodemailer'
const  TRANSPORT = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "12e0b9b9a530e7",
    pass: "134c1b3719313e"
  }
});
export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject,body}: SendMailData) {
    await TRANSPORT.sendMail({
      from:'Equipe Feedget <oi@feedget.com>',
      to: 'Guilherme Barroso <guibarrosodeoliveira5@gmail.com>',
      subject,
      html: body
    })
  }

}