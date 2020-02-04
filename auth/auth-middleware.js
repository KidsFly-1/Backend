const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');;

module.exports = (req, res, next) => {
    // 1 create token for headers.auth
    const token = req.headers.authorization;

    if(token) {
        // check validity of token
    // async needs a cb function
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
        if(err) {
            
            res.status(401).json({ message: "Ah ah ah, you didn't say the magic word." })
        } else {
           
            res.email = decodedToken.email;
            next();
        }
    })
    } else { 
        res.status(400).json({ message: "Please provide credentials." })
    }
};