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



app.use(express.static(path.join(__dirname, "app", 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000
app.use("/", users)

app.listen(port, () => console.log("server running"))
