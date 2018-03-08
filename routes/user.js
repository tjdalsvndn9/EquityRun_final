const router = require('express').Router();
const passport = require('passport');
const passportConfig = require('../config/passport');
const localPassportConfig = require('../config/localPassport');
const {signUp,twoFactorEmail,twoFactorPhone,twoFactorPhoneCall} = require('../controllers/auth');


router.get('/auth/facebook',
  passport.authenticate('facebook',{scope:['email', 'public_profile']}));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook',{
      failureRedirect:'/login',
      successRedirect:'/setting/billing'
    })
  );

router.get('/api/current_user', (req,res) => {
  res.send(req.user);
})


router.get('/api/logout', (req,res) => {
  req.logout();
  res.redirect('/');
});

router.post('/api/login',
  passport.authenticate('local-login', {
    failureRedirect: '/login',
    successRedirect:'/api/current_user'
   }));


router.post('/api/signup', signUp)

router.post('/api/authenticate/email', twoFactorEmail)
router.post('/api/authenticate/phone', twoFactorPhone)
router.post('/api/authenticate/phone-call',twoFactorPhoneCall)

module.exports = router;
