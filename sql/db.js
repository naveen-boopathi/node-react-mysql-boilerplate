const mysql = require("mysql")

// Please provide your credentials here!
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "localdb"
})

db.connect((err) => {
  if (err) {
    console.log("Error connecting with database!")
    throw err
  }
  console.log("Connected to mysql database!")
})