const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ndt13102003@gmail.com',
        pass: 'leluuly1306@'
    }
})
class sendEmail {
    getForm(req,res,next) {
        res.render('email/form')
    }
    postEmail(req,res,next) {
        const sentoEmail = req.body.email;
        const text = req.body.textSend
        const mailOptions = {
            from: 'ndt13102003@gmail.com',
            to : sentoEmail,
            subject: 'Email sending by Nodejs',
            text: text,
        }
        transporter.sendMail(mailOptions)
            .then((data) => {
                res.json(data.response)
            })
            .catch(next)
    }
}


module.exports = new sendEmail()