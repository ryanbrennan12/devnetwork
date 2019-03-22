const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

//Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login')

//Load User Model
const User = require('../../models/User');

// @route  GET api/users/test
// @desc   Tests posts route
// @access Public
router.get('/test', (req, res) => {
  res.json({ message: 'Users Works!' });
});

// @route  POST api/users/register
// @desc   Register User
// @access Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body)

  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors)
  }
  //first Mongoose will check if the email exists

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200', //size
        r: 'pg', //rating
        d: 'mm' //Default
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar: avatar,
        password: req.body.password
      });

      //generating a salt and hash on seperate function calls
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          //hash password with salt
          //our hash is what we want to store in the database
          newUser.password = hash;
          newUser
            .save()
            //gives promise back
            //sending back a successful response with that user
            .then(user => res.json(user))
            .catch(err => {
              console.log('ERROR HASHING ', err);
            });
        });
      });
    }
  });
});

// @route  GET api/users/login
// @desc   Login User / Returning JWT Token
// @access Public
router.post('/login', (req, res) => {

  const { errors, isValid } = validateLoginInput(req.body)

  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors)
  }
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    //Check for user
    if (!user) {
      //want to send an error status
      errors.email = 'User not found'
      return res.status(404).json(error);
    }
    //Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //User Matched
        const payload = { id: user.id, name: user.name, avatar: user.avatar }
        //Sign Token
        jwt.sign(payload, keys.secret, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: 'Bearer ' + token
          })
        });
      } else {
        errors.password = 'Password incorrect'
        return res.status(400).json(errors);
      }
    });
  });
});

// @route  GET api/users/current
// @desc   Return Current User
// @access Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  })
})
//



module.exports = router;

