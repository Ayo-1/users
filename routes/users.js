const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../models/user")

router.post("/add", (req, res) => {

User.findOne({where: {email: req.body.email}
})
.then((user) => {

if(!user) {
	const date = new Date()
	const da = date.getFullYear()

 const user = {
	 firstName: req.body.fname,
	 lastName: req.body.lname,
	 email: req.body.email,
	 password: req.body.password,
          created: date}
const salt = bcrypt.genSaltSync(10)
const hash = bcrypt.hashSync(req.body.password, 10)
user.password = hash


 User.create(user)
	.then(() => {console.log("user added")
res.json({message: "user created"})
	})

}

else{
console.log("user already exists")
res.json({error: "another user is registered with this email"})
}
})


})


router.get("/view", (req, res) => {

	User.findAll().then((user) => {
	
	res.send(user)

	})

})


router.post("/login", (req, res) => {

User.findOne({
	where: {email: 	req.body.email}
}).then(user => {
	if(user)
	{
		if(
bcrypt.compareSync(req.body.pword, user.password)) {

 const token = jwt.sign(user.dataValues, "secret",{expiresIn: 50000}) 
res.json({token: token})
console.log(user.dataValues)
} else{ res.json({error:"wrong password"})}

	}
else{
res.json({error:
"user does not exist"}
)

}

})

})

module.exports = router
