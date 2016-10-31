
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lunch-order').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('lunch-order').insert({
          name_cust: 'Bob',
         phone_num:'2508854259',
         completion: false,
         meal_id: 3}),

      ]);
    });
};
