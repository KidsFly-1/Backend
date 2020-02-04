const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// will need my usersmodel and secrets
const Users = require('../users/users.model.js');
const secrets = require('../config/secrets.js');

router.get('/', (req, res) => {

  Users.find()
    .then(u => {
      res.status(200).json(u)
    })
    .catch(err => {
      res.status(500).json({ message: "There was an error retrieiving all users." })
    })
})

router.post('/register', (req, res) => {
    // implement registration
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 8); // << create  constant that will hash password from the user

    user.password = hash; // << set  password to hash so the DB never sees the real password

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(err => {
            res.status(500).json({ message: "There was an error registering." })
        })
});


router.post('/login', (req, res) => {
    // implement login
    let { email, password } = req.body; // << deconstruct the username & passordw from the body
    console.log("Username: " + email, "Password " + password)
  
    Users.findBy({ email }) // << look in our DB for the username provided from the body
      .first() // << the first one to match, unique usernames only so there are no dupes
      .then(user => {
        if(user && bcrypt.compareSync(password, user.password)) {
          // if true, create JWT
          const token = generateToken(user);
          // add that token to the response
          res.status(200).json({
            message: `Welcome ${user.email}!`,
            token
          });
        } else {
          res.status(401).json({ message: "Invalid Credentials" })
        }
      })
      .catch(err => {
        res.status(500).json({ message: "There was a server error when loggin in." })
      })
  });
  



// Generate a token
function generateToken(user) {

    //  Create Payload
    const payload = {
      username: user.username,
      subject: user.id
    }
    // Create option
    const options = {
      expiresIn: '1d', // < adds a claim of the expiration time
    }
  
    return jwt.sign(payload, secrets.jwtSecret, options)
  
  };

module.exports = router;