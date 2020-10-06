const dotenv = require("dotenv")
dotenv.config()
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"

const emailUser = process.env.EMAIL_USERNAME
const emailPass = process.env.EMAIL_PASSWORD
const transporter = nodemailer.createTransport({
  auth: {
    pass: emailPass,
    user: emailUser,
  },
  service: "gmail",
})


export function sendEmail(data){
  const mailOptions = {
    attachments: data.screenshot ? [
      {
        filename: data.screenshot,
        path: `./${data.screenshot}`
      }
    ]: undefined,
      from: emailUser,
      subject: data.subject,
      html: data.text,
      to: emailUser
    
  }
  transporter.sendMail(mailOptions, error => {
    if (error) {
      console.error('✖ couldn\'t send email', error);
    } else {
      console.info('✔ email sent');
    }
  });
}