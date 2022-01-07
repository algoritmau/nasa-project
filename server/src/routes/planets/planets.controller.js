const { planets } = require('../../models/planets.model')

const getPlanets = (_, res) => {
  return res.status(200).json(planets)
}

module.exports = {
  getPlanets
}
