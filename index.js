const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const {PORT}  = require('./config/secret');

//database bootup
require('./database');

//middleware
require('./config/middleware')(app);

//routes
require('./routes')(app);

app.listen(PORT,() => {
  console.log('it is booted up')
})
