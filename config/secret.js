const DATABASE  = 'mongodb://tjdalsvndn9:cj7600tu@ds239638.mlab.com:39638/udemy-clone';
const PORT = 5000;
const SECRET_KEY = 'dsahgasdtrewasdgsdg'

///facebook
const FACEBOOK_CLIENT_ID = '155062371861139'
const FACEBOOK_CLIENT_SECRET = 'c853967ecd5e42ff4c10e578e4334f6e';
const FACEBOOK_PROFILE_FIELDS = ["id",'emails','displayName','photos','name'];
const FACEBOOK_CALLBACK_URL = `http://localhost:3000/auth/facebook/callback`


//local
const SALT = 10;

//MailChimp
const MAIL_CHIMP_API_KEY = '71ea9541ef73552867fb5a03ca3f1669-us17';

//Sendgrid
//account equityrun
//password Rabun
const SENDGRID_KEY = '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'


//Twilio
const TWILIO_SID = 'AC6a30248efb9892b8a1f1dea3fad2765f';
const TWILIO_TOKEN = 'e0bcebd93a6c01b89f6b76f723081618';

module.exports = {
  DATABASE,
  PORT,
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  FACEBOOK_CALLBACK_URL,
  SECRET_KEY,
  SALT,
  MAIL_CHIMP_API_KEY,
  SENDGRID_KEY,
  TWILIO_SID,
  TWILIO_TOKEN
}
