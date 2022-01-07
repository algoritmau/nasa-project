const fs = require('fs')
const path = require('path')

const parse = require('csv-parse')

const habitablePlanets = []

/**
 * Finds the habitable planets in the given CSV file.
 * @param  {} planet
 * @key {number} planet.koi_disposition
 * @key {number} planet.koi_insol = Stellar flux: the amount of light received by the planet
 * @key {number} planet.koi_prad = Planet radius: the radius of the planet in Earth radii
 * @returns {Boolean} true if the planet is habitable, false otherwise
 */
const checkPlanetHabilability = (planet) =>
  planet.koi_disposition === 'CONFIRMED' &&
  planet.koi_insol > 0.36 &&
  planet.koi_insol < 1.11 &&
  planet.koi_prad < 1.6

const loadPlanetsData = () =>
  new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, '..', 'data', 'kepler_data.csv'))
      .pipe(
        parse.parse({
          comment: '#',
          columns: true
        })
      )
      .on('data', (data) => {
        if (checkPlanetHabilability(data)) {
          habitablePlanets.push(data)
        }
      })
      .on('error', (error) => {
        console.error(error)
        reject(error)
      })
      .on('end', () => {
        console.log(`${habitablePlanets.length} habitable planets found!`)
        resolve()
      })
  })

module.exports = {
  loadPlanetsData,
  planets: habitablePlanets
}
