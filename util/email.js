const sgMail = require('@sendgrid/mail');
const {SENDGRID_KEY} = require('../config/secret');
sgMail.setApiKey(SENDGRID_KEY);


const sendEmail = (to,from,subject,text) => {
  const msg = {
    to,
    from,
    subject,
    text
  };
  sgMail.send(msg);
}


module.exports = {
  sendEmail
}
