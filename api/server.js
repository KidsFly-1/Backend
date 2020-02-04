const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Router Import
const userRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');
const authAdmin = require('../auth/auth-admin.js');
const userTrips = require('../trips/trips.js');
const user_trips = require('../user_trips/user_trips.js');

// Create server w epress
const server = express();

// server uses - helmet and cors
server.use(helmet());
server.use(express.json());
server.use(cors());

// server use routers
server.use('/api/users', userRouter);
server.use('/api/auth', authRouter);
server.use('/api/auth/admin', authAdmin);
server.use('/api/trips', userTrips);
server.use('/api/user_trips', user_trips);

server.get('/', (req, res) => {
    res.send('Kids Fly API is live folks!')
})

module.exports = server;