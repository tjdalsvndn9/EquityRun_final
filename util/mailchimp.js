const {MAIL_CHIMP_API_KEY} = require('../config/secret');
const Mailchimp = require('mailchimp-api-v3')

const mailchimp = new Mailchimp('71ea9541ef73552867fb5a03ca3f1669-us17');

const saveToMailChimp = async (email, done) => {
  const url = '/lists/21f5c70032/members'
  try{
     mailchimp.post(url, {
      email_address : email,
      status : 'subscribed'
    })
    }
    catch(err){
      done(err)
    }
  }









module.exports = {
  saveToMailChimp
}
