const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

//Load User Model
const User = require('../../models/User');

// @route  GET api/users/test
// @desc   Tests posts route
// @access Public
router.get('/test', (req, res) => {
  res.json({ message: 'Users Works!' });
});

// @route  GET api/users/register
// @desc   Register User
// @access Public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200',
        r: 'pg',
        d: 'mm' //Default
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar: avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
          .then(user => res.json(user))
          .catch((err) => {
            console.log('ERROR HASHING ', err)
          })
        });
      });
    }
  });
});

module.exports = router;