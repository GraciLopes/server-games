const express = require("express")
const app = express()
const games = require("./routes/gamesroute")

app.use("/", games)
app.use("/jogos", games)


module.exports = app