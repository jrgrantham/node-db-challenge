const express = require('express');
const Projects = require('../helpers/projects-model');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allProjects = await Projects.getProjects();
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
    const allTasks = await Projects.getTasks();
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
