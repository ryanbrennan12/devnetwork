# Devnetwork

Small social network app built with the MERN stack.

## Code Style


[![Style Guide: Hack Reactor](https://img.shields.io/badge/Style%20Guide-Hack%20Reactor-blue.svg)](https://github.com/hackreactor-labs/eslint-config-hackreactor)

## Tech/Frameworks used

- [MongoDB](https://docs.mongodb.com/manual/)
- [Express](http://expressjs.com/)
- [React](https://reactjs.org/docs/hello-world.html/)
- [Redux](https://redux.js.org/)

## Code Example

Example JSON response to `http:localhost:5000/api/posts`

```json
[
  {
    "_id": "5c09bb6952c59d9b8e82e7a0",
    "text": "one more time san",
    "name": "Ryan Brennan",
    "user": "5c04750d3547353ed1667374",
    "likes": [],
    "comments": [],
    "date": "2018-12-07T00:14:33.477Z",
    "__v": 0
  }
]
```

## Installing Dependencies

```sh
# Install server dependencies
$> npm install
# Install dependencies for client
$> npm run client-install
# Run the client & server with concurrently
$> npm run-dev

# Server runs on http://localhost:5000 and client on http://localhost:3000

```

You will need to create a keys_dev.js in the server config folder with

```
module.exports = {
  mongoURI: 'YOUR_OWN_MONGO_URI',
  secretOrKey: 'YOUR_OWN_SECRET'
};
```

