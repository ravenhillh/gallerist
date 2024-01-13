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
      //   // insert into credentials db
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

// function verify(issuer, profile, cb) {
//   db.get('SELECT * FROM federated_credentials WHERE provider = ? AND subject = ?', [
//     issuer,
//     profile.id
//   ], function(err, row) {
//     if (err) { return cb(err); }
//     if (!row) {
//       db.run('INSERT INTO users (name) VALUES (?)', [
//         profile.displayName
//       ], function(err) {
//         if (err) { return cb(err); }

//         var id = this.lastID;
//         db.run('INSERT INTO federated_credentials (user_id, provider, subject) VALUES (?, ?, ?)', [
//           id,
//           issuer,
//           profile.id
//         ], function(err) {
//           if (err) { return cb(err); }
//           var user = {
//             id: id,
//             name: profile.displayName
//           };
//           return cb(null, user);
//         });
//       });
//     } else {
//       db.get('SELECT * FROM users WHERE id = ?', [ row.user_id ], function(err, row) {
//         if (err) { return cb(err); }
//         if (!row) { return cb(null, false); }
//         return cb(null, row);
//       });
//     }
//   });
// ));
passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((user, cb) => {
//   User.find({ googleId })
//     .then((user) => cb(null, user))
//     .catch((err) => cb(err));
  cb(null, user);
});

const authRouter = express.Router();

authRouter.get('/login', (req, res) => {
  console.log('rendering login')
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
    console.log('in between if')
    res.redirect('/login');
  });
});

module.exports = { authRouter };
