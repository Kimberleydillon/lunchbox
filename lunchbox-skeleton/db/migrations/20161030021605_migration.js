
exports.up = function(knex, Promise) {
  return knex.schema.createTable('meal', function(table){
    table.increments('meal_id');
    table.string('meal_name');
    table.integer('cost')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.droptable('meal');
};


