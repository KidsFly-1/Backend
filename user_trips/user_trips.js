const router = require('express').Router();
const UserTrips = require('./user_trips.model.js');
const authenticate = require('../auth/auth-middleware.js');

router.get('/', authenticate, (req, res) => {
    UserTrips.find()
        .then(trips => {
            res.status(200).json(trips)
        })
})

router.post('/add', (req, res) => {

    let newTrip = req.body;

    UserTrips.add(newTrip)
        .then(t => {
            res.status(201).json(t)
        })
        .catch(err => {
            res.status(500).json({ message: "There was an error adding that trip."
        })
        })
})


//PUT (update) the users trip(s)
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const trip = req.body;

    console.log(trip)

    try {
        const updated = await UserTrips.update(id, trip)
        console.log(updated)
        if(updated) {
            const newTrip = await UserTrips.findMyId(id)
            res.status(200).json(newTrip)
        } else {
            res.status(404).json({ message: "That user trip id does not exist." })
        }
    } catch(err) {
        res.status(500).json({ message: "There was a server error while updating the new trip." })
    }
})


// DELETE the trip
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const trip = await UserTrips.findMyId(id)
        if(trip) {
            const deleted = await UserTrips.remove(id)
            res.status(200).json(trip)
        } else {
            res.status(404).json({ message: "That user trip id does not exist." })
        }
    } catch {
        res.status(500).json({ message: "There was a server error deleting that trip." })
    }
})


module.exports = router;