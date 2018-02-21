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



module.exports = {
  DATABASE,
  PORT,
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  FACEBOOK_CALLBACK_URL,
  SECRET_KEY,
  SALT
}
