const bodyParser = require('body-parser');
const morgan = require('morgan');
const {SECRET_KEY,DATABASE}  = require('./secret');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const expressGraphQL = require('express-graphql');
const schema = require('../schema/schema')


module.exports = (app) => {
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
  app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));
}
