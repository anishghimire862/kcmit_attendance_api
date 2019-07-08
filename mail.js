var nodeMailer = require('nodemailer');

var transporter = nodeMailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,  //true for 465 port, false for other ports
    auth: {
        user: 'kcmitattendance@zoho.com',
        pass: 'BPrk!JXBvp!E-7c'
    }
});

module.exports = {
    transporter: transporter
}