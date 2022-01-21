const { getLaunches } = require('../../models/launches.model')

const httpGetLaunches = (_, res) => res.status(200).json(getLaunches())

module.exports = {
  httpGetLaunches
}
