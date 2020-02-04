const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
  };
  
  function find() {
    return db('admin').select('id', 'username', 'password');
  }
  
  function findBy(filter) {
    return db('admin').where(filter);
  }
  
  async function add(user) {
    const [id] = await db('admin').insert(user, 'id');
  
    return findById(id);
  }
  
  function findById(id) {
    return db('admin')
      .where({ id })
      .first();
  }
  