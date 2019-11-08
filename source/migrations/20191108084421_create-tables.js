exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
      table.increments();
      table.text('name').notNullable();
      table;
      table.text('description');
      table
        .boolean('completed')
        .notNullable()
        .defaultTo(false);
    })
    .createTable('resources', table => {
      table.increments();
      table
        .text('name')
        .unique()
        .notNullable();
      table.text('description');
    })
    .createTable('tasks', table => {
      table.increments();
      table.text('description').notNullable();
      table.text('notes');
      table
        .boolean('completed')
        .notNullable()
        .defaultTo(false);
      table
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE');
    })
    .createTable('project-resources', table => {
      table.increments();
      table
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE');
      table
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project-resources')
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('project');
};
