const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../admin/admin.model.js');
const secrets = require('../config/secrets.js');
const UserTrips = require('../user_trips/user_trips.model.js');


router.post('/register', (req, res) => {
    
    let admin = req.body;

    const hash = bcrypt.hashSync(admin.password, 8); // << create  constant that will hash password from the user

    admin.password = hash; // << set password to hash so the DB never sees the real password

    Users.add(admin)
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(err => {
            res.status(500).json({ message: "There was an error registering." })
        })
});


router.post('/login', (req, res) => {
    // implement login
    let { email, password } = req.body; // << deconstruct the username & pw from the body
    console.log("Username: " + email, "Password " + password)
  
    Users.findBy({ email }) // << look in DB for the username provided from the body
      .first() // << the first one to match, unique usernames only so there are no dupes
      .then(admin => {
        if(admin && bcrypt.compareSync(password, admin.password)) {
          // if true, create JWT
          const token = generateToken(admin);
          // add that token to the response
          res.status(200).json({
            message: `Welcome ${admin.email}!`,
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



// GET all user_trips 
router.get('/', (req, res) => {
  
  let allTrips = req.body;

  UserTrips.find(allTrips)
    .then(t => {
      res.status(200).json(t)
    })
    .catch(err => {
      res.status(500).json({ message: "There was an error retriving the list of guests trips." })
    })
})
  



// Generate a token
function generateToken(admin) {

    //Create Payload
    const payload = {
      username: admin.username,
      subject: admin.id
    }

  
    //Create option(s)
    const options = {
      expiresIn: '1h', // < adds a claim of the expiration time
    }
  
    return jwt.sign(payload, secrets.jwtSecret, options)
  
  };

module.exports = router;