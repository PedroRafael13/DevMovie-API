import { Router } from 'express'

const routes = new Router()

routes.post('/', (require, response) => {
  return response.status(201).json()
})

export default new Router()