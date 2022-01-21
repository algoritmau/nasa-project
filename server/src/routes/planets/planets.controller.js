const { getPlanets } = require('../../models/planets.model')

const httpGetPlanets = (_, res) => res.status(200).json(getPlanets())

module.exports = {
  httpGetPlanets
}
