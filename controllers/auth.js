const User = require('../models/user');
const mongoose = require('mongoose');
const {saveToMailChimp} = require('../util/mailchimp');

const signUp = async (req,res,next) => {
  try{
    const {email,password} = req.body;
    const newUser = new User({
      localLogin:{
        email,
        password
      }
    });
    await newUser.save();
    await res.send({loggedIn:true})
    saveToMailChimp(email,next);
  }
  catch(err){
    next(err)
  }
}







module.exports = {
  signUp
}
