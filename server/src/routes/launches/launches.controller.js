const {
  abortLaunchById,
  addLaunch,
  existLaunchWithId,
  getLaunches
} = require("../../models/launches.model")

const httpGetLaunches = (_, res) => res.status(200).json(getLaunches())

const httpAddLaunch = (req, res) => {
  const launch = req.body

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "Mission, rocket, launch date, and destination are required!"
    })
  }

  launch.launchDate = new Date(launch.launchDate)

  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid Launch date!"
    })
  }

  addLaunch(launch)

  console.log("Launch", launch)

  return res.status(201).json(launch)
}

function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id)

  // if launchId doesn't exist, return 404
  if (!existLaunchWithId(launchId)) {
    return res.status(404).json({
      error: "Launch not found!"
    })
  }

  // if launchId exists, delete it
  const abortedLaunch = abortLaunchById(launchId)

  return res.status(200).json(abortedLaunch)
}

module.exports = {
  httpAbortLaunch,
  httpAddLaunch,
  httpGetLaunches
}
