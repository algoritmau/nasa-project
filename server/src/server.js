const http = require('http')
const { start } = require('repl')
const app = require('./app')

const PORT = process.env.PORT || 8000

const { loadPlanetsData } = require('./models/planets.model')

const server = http.createServer(app)

const startServer = async () => {
  await loadPlanetsData()

  server.listen(PORT, () =>
    console.log(`🚀 Server listening on port ${PORT}...`)
  )
}

startServer()
