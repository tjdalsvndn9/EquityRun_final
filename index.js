const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const {PORT,SECRET_KEY,DATABASE}  = require('./config/secret');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);



//database bootup
require('./database');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use(cookieParser());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret:SECRET_KEY,
  store:new MongoStore({url:DATABASE,autoReconnect:true})
}))


app.use(passport.initialize());
app.use(passport.session());


//routes
app.use(require('./routes/main'));
app.use(require('./routes/user'));

//error handler
app.use((err,req,res,next) => {
  if(err) return res.status(422).send({err:err.message})
});

app.listen(PORT,() => {
  console.log('it is booted up')
})
