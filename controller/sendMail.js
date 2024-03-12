
const nodemailer = require("nodemailer");

const sendMail = async(req, res)=>{
     try {
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // Use `true` for port 465, `false` for all other ports
            auth: {
                user: 'gabrielle.walker17@ethereal.email',
                pass: 'c4CZPqK19XmhFBPum4'
            },
          });
 
          async function main() {
            // send mail with defined transport object
            const info = await transporter.sendMail({
              from: 'ABDURRAHIM" <gabrielle.walker17@ethereal.email>', // sender address
              to: "abdurrahim88557@gmail.com", // list of receivers
              subject: "Hello ✔", // Subject line
              text: "Hello abdur rahim?", // plain text body
              html: "<b>Confirm Your Verification?</b>", // html body
            });
          
            console.log("Message sent: %s", info.messageId);
            res.status(200).json({
                message :"Email send",
                info : info.messageId
            })
          }
          
          main().catch(console.error);

     } catch (error) {
          console.log(error.emssage)
     }
}

module.exports = sendMail