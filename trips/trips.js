const router = require('express').Router();
const Trips = require('./trips.model.js');
const authenticate = require('../auth/auth-middleware.js');

router.get('/', authenticate, (req, res) => {
    Trips.find()
        .then(trips => {
            res.status(200).json(trips)
        })
        .catch(err => {
            res.status(500).json({ message: "There was an issue retrieving the list of trips." })
        })
});


// POST add new trip
router.post('/add', (req, res) => {

    let newTrip = req.body;

    Trips.add(newTrip)
        .then(t => {
            res.status(201).json(t)
        })
        .catch(err => {
            res.status(500).json({ message: "There was an error adding that trip."
        })
        })
})

// PUT (update) the trip
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const trip = req.body;

    try {
        const updated = await Trips.update(id, trip)
        if(updated) {
            const newTrip = await Trips.findById(id)
            res.status(200).json(newTrip)
        } else {
            res.status(404).json({ message: "That trip id does not exist." })
        }
    } catch {
        res.status(500).json({ message: "There was a server error while updating the new trip." })
    }
})


// DELETE a trip
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const trip = await Trips.findById(id)
        if(trip) {
            const deleted = await Trips.remove(id)
            res.status(200).json(trip)
        } else {
            res.status(404).json({ message: "That trip id does not exist." })
        }
    } 
    catch {
        res.status(500).json({ message: "There was a server error trying to delete that trip." })
    }
})

module.exports = router;