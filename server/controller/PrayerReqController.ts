import { Express, Request, Response } from 'express'
import nodemailer from 'nodemailer'

export const PrayerReqHandler = async (req:Request,res:Response)=>{

    let output = `
    <b>Full Name: </b><span> ${req.body.full_name}</span><br>
    <b>
    Email: </b><span>${req.body.email}</span><br>
    <b>
    mobile: </b><span>${req.body.mobile}</span><br>
    <b>
    Message Subject: </b><span>${req.body.message_subject}</span><br>
    <b>
    Message: </b><span>${req.body.message}</span>
    `
    let transporter = nodemailer.createTransport({
        service: 'SendinBlue', 
        auth: {
          user: 'samuel.p07@yahoo.com', 
          pass: '1EXx5HsDTnqg6wUM',
        },
      });

      try{
        let info = await transporter.sendMail({
            from: `"Prayer Request Bot" <no-reply@beershebakkd.org>`, 
            to: `${process.env.RECIEVE_EMAIL_1},${process.env.RECIEVE_EMAIL_2}`, 
            subject: "Prayer Request", 
            text: req.body.message, 
            html: output, 
          });
          console.log("Message sent: %s", info.messageId);
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
          res.send({message:"message sent"})
      }catch (err){
        console.log(err)
      }
      
}