
exports.up = function(knex) {
    return knex.schema.createTable('admin', tbl => {
        tbl.increments();
  
        tbl.string('email', 50)
          .notNullable()
          .unique();
  
      tbl.string('password', 128)
          .notNullable();
  
      tbl.string('name', 128)
          .notNullable();
  
      tbl.string('location', 128)
          .nullable();
  
      tbl.string('phone', 12)
          .nullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('admin')

};
