const User = require('../models/user');
const mongoose = require('mongoose')

const signUp = async (req,res,next) => {
  try{
    const {email,password} = req.body;
    console.log(email);
    const newUser = new User({
      localLogin:{
        email,
        password
      }
    });
    await newUser.save();
    res.send({loggedIn:true})
  }
  catch(err){
    next(err)
  }
}







module.exports = {
  signUp
}
