const { Router } = require('express')

const routes = new Router()

routes.post('/', (require, response) => {
  return response.status(201).json()
})

module.exports = new Router()