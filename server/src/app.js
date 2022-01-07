const express = require('express')
const path = require('path')

const cors = require('cors')

const planetsRouter = require('./routes/planets/planets.router')

const app = express()

// const corsWhitelist = ['http://localhost:3000', 'http://localhost:8000']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (corsWhitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS!'))
//     }
//   }
// }

// Middlewares
app.use(
  cors({
    origin: 'http://localhost:3000'
  })
)
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(planetsRouter)

app.get('/', (_, res) =>
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
)

module.exports = app
