
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, description: 'task 1', notes: 'notes on task 1', completed: false},
        {project_id: 1, description: 'task 2', notes: 'notes on task 2', completed: false},
        {project_id: 1, description: 'task 3', notes: 'notes on task 3', completed: false},
        {project_id: 2, description: 'task 4', notes: 'notes on task 4', completed: false},
        {project_id: 2, description: 'task 5', notes: 'notes on task 5', completed: false},
        {project_id: 2, description: 'task 6', notes: 'notes on task 6', completed: false},
        {project_id: 3, description: 'task 7', notes: 'notes on task 7', completed: false},
        {project_id: 4, description: 'task 8', notes: 'notes on task 8', completed: false},
        {project_id: 4, description: 'task 9', notes: 'notes on task 9', completed: false},
        {project_id: 4, description: 'task 10', notes: 'notes on task 10', completed: false},
        {project_id: 4, description: 'task 11', notes: 'notes on task 11', completed: false},
        {project_id: 5, description: 'task 12', notes: 'notes on task 12', completed: false}
      ]);
    });
};
