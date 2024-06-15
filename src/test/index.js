module.exports = {
  dialect : "postgres",
  host : "localhost",
  username : "postgres",
  password : "postgres",
  database : "devburger",
  define : {
    timestamps : true,
    underscored : true,
    underscoredAll: true,
  },
}

import express from 'express'
import routes from'./routes'
class App {
  constructor(){
    this.app = express()
  }

  middleware(){
    this.app.use(express.json())
  }

  routes(){
    this.app.use(routes())
}
}

export default new App().app