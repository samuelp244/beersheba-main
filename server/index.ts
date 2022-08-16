import express, { Express, Request, Response } from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors';
import path from 'path';
const app:Express = express();

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname + "/public")))

app.get('/*',(req:Request,res:Response)=>{
  res.sendFile(path.join(__dirname,'public','index.html'))
})

app.post('/api/v1/sendPrayerRequest',async (req:Request,res:Response)=>{

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
            from: `"Prayer Request Bot" <RrayerRequestBot@beershebakkd.org>`, 
            to: "samuelp244@gmail.com, xtrafalgar.law07@gmail.com", 
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
      

})

app.listen(1337,()=>{
    console.log('app started at 1337')
})