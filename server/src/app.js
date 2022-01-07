const express = require('express')
const cors = require('cors')

const planetsRouter = require('./routes/planets/planets.router')

const app = express()

const corsWhitelist = ['http://localhost:3000', 'FINAL_URL']
const corsOptions = {
  origin: function (origin, callback) {
    if (corsWhitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS!'))
    }
  }
}

// Middlewares
app.use(cors(corsOptions))
app.use(express.json())
app.use(planetsRouter)

module.exports = app
