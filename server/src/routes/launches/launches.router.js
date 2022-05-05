const express = require("express")

const {
  httpAbortLaunch,
  httpAddLaunch,
  httpGetLaunches
} = require("./launches.controller")

const launchesRouter = express.Router()

launchesRouter.get("/", httpGetLaunches)
launchesRouter.post("/", httpAddLaunch)
launchesRouter.delete("/:id", httpAbortLaunch)

module.exports = launchesRouter
