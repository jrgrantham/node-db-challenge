
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'project 1', description: 'project 1 description', completed: false},
        {name: 'project 2', description: 'project 2 description', completed: false},
        {name: 'project 3', description: 'project 3 description', completed: false},
        {name: 'project 4', description: 'project 4 description', completed: false},
        {name: 'project 5', description: 'project 5 description', completed: false},
        {name: 'project 6', description: 'project 6 description', completed: false},
        {name: 'project 7', description: 'project 7 description', completed: false},
      ]);
    });
};
