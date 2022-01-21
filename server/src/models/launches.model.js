const launches = new Map()

let latestFligthNumber = 100

const launch = {
  fligthNumber: 100,
  mission: 'Kepler Exporation 9',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  destination: 'Kepler-442 b',
  customer: ['NASA', 'SpaceX'],
  upcoming: true,
  success: true
}

launches.set(launch.fligthNumber, launch)

const getLaunches = () => Array.from(launches.values())

const addLaunch = (launch) => {
  latestFligthNumber++

  launches.set(
    launch.fligthNumber,
    Object.assign({}, launch, {
      fligthNumber: latestFligthNumber,
      customer: ['NASA', 'SpaceX'],
      upcoming: true,
      success: true
    })
  )
}

module.exports = {
  addLaunch,
  getLaunches
}
