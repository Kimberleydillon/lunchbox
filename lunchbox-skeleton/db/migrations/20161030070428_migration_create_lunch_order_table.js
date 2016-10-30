exports.up = function(knex, Promise) {
    return knex.schema.createTable('order_lunch', function(table){
    table.increments('order_id');
    table.string('name_cust');
    table.string('phone_cust');
    table.boolean('completion');
    table.foreign('meal_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('order_lunch');
};