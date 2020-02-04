
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        // ID
        tbl.increments()
          // .notNullable();
  
      // email column
      tbl.string('email', 128)
          .notNullable() // required
          .unique(); // cannot add same email twice
  
      // password column
      tbl.string('password', 128)
          .notNullable(); // required
  
      // full name column
      tbl.string('fullName', 255)
          .notNullable(); // required
  
      // address column
      tbl.string('address', 255)
          .notNullable(); // required
  
      // phone # column
      tbl.string('phone', 20)
          .notNullable(); // required
  
      // local airport column
      tbl.string('localAirport', 255)
          .notNullable(); // required
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')

};
