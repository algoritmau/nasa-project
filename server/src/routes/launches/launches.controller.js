const { launches } = require('../../models/launches.model')

const getLaunches = (_, res) =>
  res.status(200).json(Array.from(launches.values()))

module.exports = {
  getLaunches
}
