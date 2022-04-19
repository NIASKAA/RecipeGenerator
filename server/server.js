require("dotenv").config()

const express = require("express")
const cors = require("cors")
const connection = require("./config/connect")
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

const PORT = process.env.PORT || 4000;
connection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`)
  })
})