const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const {FACEBOOK_CLIENT_ID,FACEBOOK_CLIENT_SECRET,FACEBOOK_PROFILE_FIELDS,FACEBOOK_CALLBACK_URL} = require('./secret');
const User = require('../models/user');



passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});


passport.use(new FacebookStrategy({
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: FACEBOOK_CALLBACK_URL,
    profileFields:FACEBOOK_PROFILE_FIELDS,
    proxy:true
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne(
      {facebookId:profile.id}
    )
    .then(existingUser => {
      if(existingUser){
        console.log(existingUser)
        done(null,existingUser)
      }
      else{
        new User({
          facebookId:profile.id,
          profile:{
            name:profile.displayName,
            picture:`https://graph.facebook.com/${profile.id}/picture?type=large`
          }
        })
        .save()
        .then(user => done(null,user))
      }
    })
  }
));
