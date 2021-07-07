const knex = require('knex')
const config = require('../../knexfile')
const db = knex(config.development)

module.exports = {
  getResources,
  getProjects,
  getTasks,
  addProject,
  addResource,
  addTask,
  updateProject
}

function getResources() {
  return db('resources')
}

function getProjects() {
  return db('projects')
}

function getTasks() {
  return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select('p.name', 't.description', 't.notes', 't.completed')
}

async function addProject(newProject) {
  await db('projects').insert(newProject)
  return getProjects()
}

async function addResource(newResource) {
  await db('resources').insert(newResource)
  return getResources()
}

async function addTask(newTask) {
  await db('tasks').insert(newTask)
  return getTasks()
}

async function updateProject(id, changes) {
  await db('projects')
    .where({id})
    .update(changes)
  return getProjects()
}

