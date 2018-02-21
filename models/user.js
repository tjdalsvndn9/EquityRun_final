const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {Schema} = require('mongoose');
const {SALT} = require('../config/secret');


const userSchema = new Schema({
  facebookId:{
    type:String,
    default:''
  },
  localLogin:{
    email:{
      type:String,
      default:'',
      unique:true
    },
    password:{
      type:String,
    }
  },
  profile:{
    name:{type:String,default:'user'},
    picture:{type:String,default:''}
  },
  courseTeach:[{
      course:{type:Schema.Types.ObjectId,ref:'Course'}
    }],
  courseTaken:[{
      course:{type:Schema.Types.ObjectId,ref:'Course'}
    }]
},{timestamps: { createdAt: 'created_at' }});

userSchema.pre('save', async function(next) {
  if(this.localLogin.email === '' || this.localLogin.password === '') return next();
  if(!this.isModified('localLogin.password')) return next();
  if(this.localLogin.password.length <= 6) return next(new Error('password has to be longer than 6 characters'));
  try{
    const hash = bcrypt.hashSync(this.localLogin.password, SALT);
    this.localLogin.password = hash;
    next();
  }
  catch(err){
    next(err)
  }
});

userSchema.methods.verifyPassword = function(password){
  return bcrypt.compareSync(password, this.localLogin.password);
};


const User = mongoose.model('User', userSchema);

module.exports = User;
