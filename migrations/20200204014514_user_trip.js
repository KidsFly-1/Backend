
exports.up = function(knex) {
    return knex.schema.createTable('user_trips', tbl => {
        tbl.increments();
    
    tbl.string('airport', 128)
    .notNullable();

tbl.string('airline', 128)
    .notNullable();

tbl.string('flightNumber', 128)
    .notNullable();

tbl.string('departureTime', 128)
    .notNullable();

tbl.integer('carryOnBags', 3)
    .notNullable();

tbl.integer('checkedBags', 3)
    .notNullable();

tbl.integer('children', 3)
    .notNullable();

tbl.boolean('arrived')
.defaultTo(0)
    .notNullable();

  tbl.boolean('en_route')
  .defaultTo(0)
      .notNullable();
})
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_trips')

};
