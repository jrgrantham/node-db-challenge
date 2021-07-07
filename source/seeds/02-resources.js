
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'resource 1', description: 'resource 1 description'},
        {name: 'resource 2', description: 'resource 2 description'},
        {name: 'resource 3', description: 'resource 3 description'},
        {name: 'resource 4', description: 'resource 4 description'},
        {name: 'resource 5', description: 'resource 5 description'},
        {name: 'resource 6', description: 'resource 6 description'},
        {name: 'resource 7', description: 'resource 7 description'},
        {name: 'resource 8', description: 'resource 8 description'},
        {name: 'resource 9', description: 'resource 9 description'},
        {name: 'resource 10', description: 'resource 10 description'},
      ]);
    });
};
