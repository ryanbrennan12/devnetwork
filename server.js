const express = require('express');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express()

//Body Parse middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB through mongoose
mongoose.connect(db).then(() => {
  console.log('SUCCESS Connected to DB!!')
}).catch((err) => {
  console.log('ERROR Connecting to DB!!', err)
})

//Passport middleware
app.use(passport.initialize())

//Passport Config - jwt strategy
require('./config/passport')(passport);

//Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts)


app.listen(port, () => {
  console.log(`Connected!  Listening on port ${port}`)
})