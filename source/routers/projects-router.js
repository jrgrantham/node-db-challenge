const express = require('express');
const Projects = require('../helpers/projects-model');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allProjects = await Projects
      .getProjects()
      .map(project => {
        if (project.completed) {project.completed = true}
        else project.completed = false
        return project
      })
    res.status(200).json(allProjects);
  } catch (error) {
    res.status(500).json({ message: 'failed' + error });
  }
});

router.post('/', async (req, res) => {
  try {
    const newProject = req.body;
    const allProjects = await Projects.addProject(newProject);
    res.status(200).json(allProjects);
  } catch (error) {
    res.status(500).json({ message: 'failed' + error });
  }
});

router.put('/', async (req, res) => {
  try {
    const {id, name, description, completed} = req.body
    const allProjects = await Projects
      .updateProject(id, {name, description, completed})
      res.status(200).json(allProjects);
  } catch (error) {
    res.status(500).json({ message: 'failed' + error });
  }
})

router.get('/resources', async (req, res) => {
  try {
    const allResources = await Projects.getResources();
    res.status(200).json(allResources);
  } catch (error) {
    res.status(500).json({ message: 'failed' + error });
  }
});

router.post('/resources', async (req, res) => {
  try {
    const newResource = req.body;
    const allResources = await Projects.addResource(newResource);
    res.status(200).json(allResources);
  } catch (error) {
    res.status(500).json({ message: 'failed' + error });
  }
});

router.get('/tasks', async (req, res) => {
  try {
    const allTasks = await Projects
      .getTasks()
      .map(task => {
        if (task.completed) {task.completed = true}
        else task.completed = false
        return task
      })
    res.status(200).json(allTasks);
  } catch (error) {
    res.status(500).json({ message: 'failed' + error });
  }
});

router.post('/tasks', async (req, res) => {
  try {
    const newTask = req.body;
    const allTasks = await Projects.addTask(newTask);
    res.status(200).json(allTasks);
  } catch (error) {
    res.status(500).json({ message: 'failed' + error });
  }
});

module.exports = router;
