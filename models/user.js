const db = require("../database/db")
const sequelize = require("sequelize")
module.exports = db.seq.define("user", {
	id: {
      type: sequelize.INTEGER,
	primaryKey: true
	},
    firstName:{type:  sequelize.STRING,
	       notNull: true},
    lastName: {type: sequelize.STRING,
	    notNull: true},
    email: {type: sequelize.STRING,
	    notNull: true},
	password: {type: sequelize.STRING,
		notNull: true},
	created: {type: sequelize.DATE, notNull: true}

}, {timestamps: false}

)

