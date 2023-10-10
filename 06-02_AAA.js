import nodemailer from 'nodemailer';

export default function send(SenderMail,Password , Message)
{
    const transporter = nodemailer.createTransport({
        service : 'hotmail',
        auth:{
            user: SenderMail,
            pass: Password
        }
    })
    transporter.sendMail({
        from: SenderMail,
        to: 'joehef225@gmail.com', 
        subject: "task1", 
        text: Message,
      });
}
