// add a new trip to the user_trips table
const db = require('../database/dbConfig.js');

module.exports = {
    add,
    findById,
    find,
    adminFind,
    update,
    findMyId,
    remove
}

async function add(trip) {
const [id] = await db('user_trips').insert(trip, 'id')

return findMyId(id)
}

function findMyId(id) {
    return db('user_trips')
    .where({ id }).first()
}


function findById(id) {
    return db('trips')
    .where({ id }).first()
}

function find() {
    return db('user_trips').select('id', 'airport', 'airline', 'flightNumber', 'departureTime', 'carryOnBags', 'checkedBags', 'children', 'arrived', 'en_route');
}

function adminFind() {
    return db('user_trips').select('id','arrived', 'airport', 'children', 'carryOnBags');
}

function update(id, changes) {
    return db('user_trips')
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db('user_trips')
    .where('id', id)
    .del();
}