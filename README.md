# Nasa Project

This project simulates a NASA Mission Control Dashboard. It's a full-stack app with its own API and database.

<img src="./home.png" alt="Snapshot of the app's landing page" style="display: block; width: 80%; margin: 24px auto;" />

## App Architecture

Back-end logic lives on the `server` folder whereas the front-end code lives on the `client` folder.

I used `express` for back-end logic with the MVC pattern. Controllers lives alongside routes since they define how to respond to a specific route.
