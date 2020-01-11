console.log("working")
const express = require("express");
const app = express()
const sequelize = require("sequelize")
const bodyparser = require("body-parser")
const users = require("./routes/users.js")
const cors = require("cors")
const path = require("path")

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))



app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.use("/", users)

app.listen(5000, () => console.log("server running"))
