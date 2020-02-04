const router = require('express').Router();

const Users = require('./admin.model.js');

// Restricted MW

router.get('/admin', (req, res) => {
    Users.find()
        .then(admin => {
            if(admin) {
                admin.map(u => {
                    const { id, username } = u;
                    res.status(200).json({ id, username })
                })
            } else {
                res.status(401).json({ message: "Ah ah ah, you didn't say the magic word. })
            }
        })
        .catch(err => {
            res.status(500).json({ message: "there was an issue with that request." })
        })
});

module.exports = router;