const express = require('express')
const helmet = require('helmet')

const projectsRouter = require('./source/routers/projects-router')

const server = express()

server.use(helmet())
server.use(express.json())

server.get('/', (req, res) => {
  res.send('server is running')
})

server.use('/api/projects', projectsRouter)

module.exports = server