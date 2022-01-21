const launches = new Map()

const launch = {
  fligthNumber: 100,
  mission: 'Kepler Exporation 9',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  destination: 'Kepler-442 b',
  customer: ['NASA', 'SpaceX', 'Orbital Sciences Corp.', 'JAXA', 'COSMOS'],
  upcoming: true,
  success: true
}

launches.set(launch.fligthNumber, launch)

const getLaunches = () => Array.from(launches.values())

module.exports = {
  getLaunches
}
