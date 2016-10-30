
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
 return knex('meal').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('meal').insert({meal_id: 1, name_meal: 'meaty', cost: 10}),
        knex('meal').insert({meal_id: 2, name_meal: 'veggies', cost: 10}),
        knex('meal').insert({meal_id: 3, name_meal: 'gluten Free', cost: 10})
      ]);
    });
};
