const express = require('express')

const { httpAddLaunch, httpGetLaunches } = require('./launches.controller')

const launchesRouter = express.Router()

launchesRouter.get('/', httpGetLaunches)
launchesRouter.post('/', httpAddLaunch)

module.exports = launchesRouter
