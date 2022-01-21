const { addLaunch, getLaunches } = require('../../models/launches.model')

const httpGetLaunches = (_, res) => res.status(200).json(getLaunches())

const httpAddLaunch = (req, res) => {
  const launch = req.body

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.destination
  ) {
    return res.status(400).json({
      error: 'Mission, rocket, launch date, and destination are required!'
    })
  }

  launch.launchDate = new Date(launch.launchDate)

  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: 'Invalid Launch date!'
    })
  }

  addLaunch(launch)

  return res.status(201).json(launch)
}

module.exports = {
  httpAddLaunch,
  httpGetLaunches
}
