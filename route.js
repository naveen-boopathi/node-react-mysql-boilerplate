const express = require("express")
const router = express.Router()
// const db = require("./sql/db")

router.get("/hello", (req, res) => {
  res.send({express: "Connected with backend successfully!"})
})

module.exports = router