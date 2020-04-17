const express = require("express")
const bodyParser = require("body-parser")
const routes = require("./route")

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", routes)

app.listen(port, () => {
    console.log(`Listening on the port: ${port}`)
})
