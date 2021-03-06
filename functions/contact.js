require('dotenv').config();

exports.handler = (event,_context,callback)=>{
   const mailgun = require('mailgun-js');
   
   const mg= mailgun({
       apiKey:process.env.MAILGUN_API_KEY,
       domain:process.env.MAILGUN_DOMAIN
   })

  

   const data = JSON.parse(event.body);

   const email = {
       from:'DesignAngel <designangel2013@gmail.com>',
       to:`${data.name} <${data.email}>`,
       subject:data.subject,
       text:data.body
   }
   mg.messages().send(email,(error,response)=>{
       console.log(error)
    callback(error,{
        statusCode:200,
        body:JSON.stringify(response)
    })
   })
   
  
}