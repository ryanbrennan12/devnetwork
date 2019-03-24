# Hacktown

Small social network app built with the MERN stack.

- [1.2. Usage](#13-usage)
    - [1.2.1. JSON Example](#123-json-example)
    - [1.2.2. API endpoints](#121-api-endpoints)
- [1.3. Code Style](#13-code-style)
- [1.4. Development Setup](#14-development-setup)




## 1.2.1 JSON Examples

Example GET request JSON response to `http://localhost:5000/api/profile` with appropriate [Bearer token](https://jwt.io/introduction/)

```json
{
    "social": {
        "linkedin": "https://www.linkedin.com/in/ryansbrennan",
        "facebook": "https://www.facebook.com/rybrennan444",
        "instagram": "https://www.instagram.com/baconlollipops"
    },
    "skills": [
        "Javascript",
        " HTML5",
        " React.js",
        " Redux",
        " Backbone.js",
        " REST",
        " Node.js",
        " MongoDB",
        " MySQL",
        " Postgresql"
    ],
    "_id": "5c96d9329c828c183d096c2e",
    "user": {
        "_id": "5c96d6169c828c183d096c2d",
        "name": "Ryan Brennan",
        "avatar": "//www.gravatar.com/avatar/d2ddde98aaf5e7c02fbecc79883c6c10?s=200&r=pg&d=mm"
    },
    "handle": "baconlollipops",
    "company": "Hack Reactor @ Galvanize",
    "website": "http://www.ryanbrennan.dev",
    "status": "Full Stack Software Engineer",
    "experience": [
         {
            "current": true,
            "_id": "5c9724501bf7151f7dbdb6c1",
            "title": "Associate Instructor of Software Engineering",
            "company": "Hack Reactor at Galvanize Inc",
            "location": "San Francisco, CA",
            "from": "2019-02-01T00:00:00.000Z",
            "description": "Work with students during rigourous software engineering program to prepare them for top engineering positions."
        }
    ],
    "education": [
        {
            "current": false,
            "_id": "5c9726831bf7151f7dbdb6c2",
            "school": "Villanova University",
            "degree": "Bachelor of Arts",
            "fieldofstudy": "Economics",
            "from": "2009-06-06T00:00:00.000Z",
            "to": "2013-06-06T00:00:00.000Z",
            "description": "NCAA Basketball Champs 1985, 2016, 2018. Nbd ¯\_(ツ)_/¯"
        }
    ],
    "date": "2019-03-24T01:11:14.115Z",
    "__v": 0,
    "githubusername": "ryanbrennan12",
    "bio": "I am a Full Stack Engineer who occasionally does not fall down while snowboarding.  Lets make something magical!! Boom!"
}
```

Example GET request JSON response to `http://localhost:5000/api/posts`

```json
[
    {
        "_id": "5c9729ea1bf7151f7dbdb6c3",
        "text": "Headed to Tahoe for a couple days. Hmu!",
        "user": "5c96d6169c828c183d096c2d",
        "likes": [
            {
                "_id": "5c972d301bf7151f7dbdb6c5",
                "user": "5c971de51bf7151f7dbdb6be"
            }
        ],
        "comments": [
            {
                "date": "2019-03-24T07:12:13.123Z",
                "_id": "5c972dcd1bf7151f7dbdb6c6",
                "text": "Is Pri Pri going to make it?  Make sure you bring chains!",
                "name": "Charley Coker",
                "user": "5c971de51bf7151f7dbdb6be"
            }
        ],
        "date": "2019-03-24T06:55:38.171Z",
        "__v": 2
    },
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

###  1.2.2 API Endpoints

Below you can find all available endpoints.


#### Public 'profile' routes:
+ GET `/api/profile/test`
  - Tests profile route
+ GET `/api/profile/all`
  - Gets all profiles
+ GET `/api/profile/handle/:handle`
  - Get profile by handle
+ GET `/api/profile/user/:user ID`
  - Get profile by user ID

#### Private 'profile' routes:
+ GET `/api/profile`
  - Gets current users profile
+ POST `/api/profile`
  - Create or edit user profile.
+ POST `/api/profile/education`
  - Add education to profile.
+ POST `/api/profile/experience`
  - Add experience to profile.
+ DELETE `api/profile/experience/:exp_id`
  - Delete experience from profile
+ DELETE `api/profile/eduction/:exp_id`
  - Delete education from profile
+ DELETE `api/profile`
  - Delete user and profile


#### Public 'posts' routes:
+ GET `/api/posts/test`
  - Tests post route
+ GET `/api/posts`
  - Gets total posts
+ GET `/api/posts/:id`
  - Gets posts by user ID

#### Private 'posts' routes:
+ POST `/api/posts`
  - Saves new post to the DB
+ POST `api/posts/like/:id`
  - Given a postID, likes post and saves 'like' to the DB.
+ POST `api/posts/unlike/:id`
  - Given a postID, unlikes post and deletes 'like' from the DB.
+ POST `api/posts/comment/:id`
  - Given a commentID, adds comment to post.
+ DELETE `/api/posts/comment/:id/:comment_id`
  - Given a commentID, deletes comment.
+ DELETE `/api/posts/:id`
  - Given a postId, deletes post.


## 1.3 Code Style


[![Style Guide: Airbnb](https://img.shields.io/badge/Style%20Guide-Airbnb-Red.svg)](https://github.com/airbnb/javascript)


## 1.4 Development Setup

This Application uses the following dev stack:

- DB: [MongoDB](https://docs.mongodb.com/manual/)
- Server: [Express](http://expressjs.com/)
- Client: [React](http://reactjs.org/) with [Redux](https://redux.js.org/)
- Deployment: [Elastic Beanstalk on AWS](https://aws.amazon.com/elasticbeanstalk/)

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

