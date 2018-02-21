const mongoose = require('mongoose');
const {DATABASE}  = require('../config/secret');

mongoose.connect(DATABASE)
.then(() => console.log('mongoose connected'))
.catch(e => console.log(e));
