exports.up = function(knex, Promise) {
    return knex.schema.createTable('lunch-order', function(table){
    table.increments('order_id');
    table.string('name_cust');
    table.string('phone_num');
    table.boolean('completion');
    table.integer('meal_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lunch-order');
};