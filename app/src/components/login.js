import React from "react"
import {Link, withRouter} from "react-router-dom"
import axios from "axios"
class Login extends React.Component {
constructor() {
super()
this.state = {
	email: "",
	password: "",
	loading: false,
	error: {
	status: false,
	message: ""
	}
}
}
UNSAFE_componentWillMount() {

if(localStorage.userToken) {

this.props.history.push("/user/5")

}

}
clearError = () => {

	setTimeout(() => this.setState({error: {status: false, message:""}}), 5000)

}
login = (e) => {
e.preventDefault()
this.setState({loading: true})
fetch('/login', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: this.state.email,
    pword: this.state.password,
  })
})

.then(res => res.json())
.then((data) =>{
setTimeout(() => {
if(data.token){
localStorage.setItem("userToken", data.token)
this.setState({loading: false, email: "", password:"", error: {status: false, message: ""}})
this.props.history.push("/")}

else if(data.error) {
this.setState({loading: false, error: {status: true, message: data.error}})
this.clearError()
}
}
)
}
)}
change = (e) => {

e.preventDefault()
this.setState({[e.target.name]: e.target.value})
}



render() {
return( 
<div>
<div className="container-fluid mt-5 mb-5">                                         <center>                                  <div className="col-md-6 card bg-dark text-light">                                          <h4 className="mt-3">Login</h4>
{this.state.loading? <div className="text-center mr-auto ml-auto mt-4 mb-5">
<div className="spinner-border"></div></div>	:
<form>
{this.state.error.status? <div className="alert alert-danger">{this.state.error.message}</div>: null}
<input type="email" className="my-3 py-2 text-center form-control" placeholder="Email...." required name="email" onChange={this.change} value={this.state.email} />

<input type="password" value={this.state.password} onChange={this.change} className="my-3 py-2 text-center form-control" placeholder="Password..." required name="password" />

<input type="submit" value="Login" className="btn btn-outline-light my-2 py-2" onClick={this.login}/>

<hr className="hr-outline-light" />
<p> Sign up if you don't have an account <Link to="/">Here</Link></p>  

</form>}

</div>
</center>
</div>
</div>

)
}
}

export default withRouter(Login)
