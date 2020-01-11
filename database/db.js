const sequelize = require("sequelize")
const db = {}
const seq = new sequelize("FnyIZ2aIfe", "FnyIZ2aIfe", "B1mdqPBZSx", {
	host: "remotemysql.com",
        dialect: "mysql"
    })
db.sequelize = sequelize
db.seq = seq

module.exports = db

