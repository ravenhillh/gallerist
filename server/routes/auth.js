const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
const { User, Credentials } = require('../db/index');

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: '/oauth2/redirect/google',
  scope: ['profile'],
}, ((accessToken, refreshToken, profile, cb) => {
  User.findOrCreate({ googleId: profile.id })
    .then((data) => {
      // if / else block
      console.log('User data ', data);
      cb(null, data);
      // if(data.length === 0) {
      // insert into credentials db
      //   User.create({
      //     username: String,
      //     name: profile.displayName
      //     hash: String,
      //     salt: String,
      //     gallery: Object,
      //     friends: Array,
      //     wallet: Number,
      //   })
      // }
    })
    .catch((err) => {
      console.error(' ', err);
      cb(err);
    });
})));

passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((user, cb) => {
//   User.find({ googleId })
//     .then((user) => cb(null, user))
//     .catch((err) => cb(err));
  cb(null, user);
});

// Authorization routes
const authRouter = express.Router();

authRouter.get('/login', (req, res) => {
  console.log('rendering login');
  res.render('login');
});

authRouter.get('/login/federated/google', passport.authenticate('google'));

authRouter.get('/oauth2/redirect/google', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/login',
}));

authRouter.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) { return next(err); }
    res.redirect('/login');
  });
});

module.exports = { authRouter };
