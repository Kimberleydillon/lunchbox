
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lunch-order').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('lunch-order').insert({order_id: '',name_cust: Bob, phone_number:, completion: F, meal_id: ''}),

      ]);
    });
};
