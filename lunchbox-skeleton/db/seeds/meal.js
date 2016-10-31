
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
 return knex('meal').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('meal').insert({meal_id: 1, meal_name: 'meaty', cost: 10}),
        knex('meal').insert({meal_id: 2, meal_name: 'veggies', cost: 10}),
        knex('meal').insert({meal_id: 3, meal_name: 'gluten Free', cost: 10})
      ]);
    });
};
