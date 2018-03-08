const User = require('../models/user');
const mongoose = require('mongoose');
const {saveToMailChimp} = require('../util/mailchimp');
const {sendEmail} = require('../util/email');
const {sendMessage,sendCall} =require('../util/twilio');


const signUp = async (req,res,next) => {
  try{
    const {email,password,role} = req.body;
    const newUser = new User({
      profile:{
        role
      },
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


const twoFactorEmail = async ({body},res,next) => {
  try{
    const {email} = body;
    const configNumber = Math.max(Math.floor(Math.random() * 10000), 0);
    await sendEmail(email,'no-reply@equityrun.com','Two Factor authentication',`the code is ${configNumber}`)
    res.send({message:"sent"})
  }
  catch(err){next(err)}
}

const twoFactorPhone = async ({body},res,next) => {
  try{
   const {phone} = body;
     const configNumber = Math.max(Math.floor(Math.random() * 10000), 0);
     await sendMessage(`+1${phone}`,'+19165849202',`the code is ${configNumber}`)
     res.send({message:"sent"})
  }
  catch(err){next(err)}
}

const twoFactorPhoneCall = async({body},res,next) => {
  try{
    const {phone} = body;
    const configNumber = Math.max(Math.floor(Math.random() * 10000), 0);
    await sendCall(`+1${phone}`,'+19165849202')
    return res.send({message:'called'})
  }
  catch(err){next(err)}
}




module.exports = {
  signUp,
  twoFactorEmail,
  twoFactorPhone,
  twoFactorPhoneCall
}
