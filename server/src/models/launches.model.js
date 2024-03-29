const launches = new Map()

let latestFlightNumber = 100

const launch = {
  flightNumber: 100,
  mission: "Kepler Exporation 9",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customer: ["NASA", "SpaceX"],
  upcoming: true,
  success: true
}

launches.set(launch.flightNumber, launch)

const existLaunchWithId = (launchId) => launches.has(launchId)

const getLaunches = () => Array.from(launches.values())

const addLaunch = (launch) => {
  latestFlightNumber++

  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customers: ["NASA", "SpaceX"],
      upcoming: true,
      success: true
    })
  )
}

const abortLaunchById = (launchId) => {
  const abortedLaunch = launches.get(launchId)

  abortedLaunch.upcoming = false
  abortedLaunch.success = false

  return abortedLaunch
}

module.exports = {
  abortLaunchById,
  addLaunch,
  existLaunchWithId,
  getLaunches
}
