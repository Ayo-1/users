
import React from "react"
import {Link, withRouter} from "react-router-dom";

class Register extends React.Component {
constructor(){
super()
this.state = {
fname: "",
lname: "",
email: "",
pword: "",
pword2: "",
loading: false,
error: ""
}
}

UNSAFE_componentWillMount() {

if(localStorage.userToken) {
this.props.history.push("/")

}

}


submit = (e) => {
e.preventDefault()
this.setState({loading: true})
if(this.state.password === this.state.password2) {
fetch("/add", {
	method: "POST",
	headers: {                               'Accept': 'application/json',             'Content-Type': 'application/json',     },
	body:JSON.stringify({
	fname: this.state.fname,
	lname: this.state.lname,
	email: this.state.email,
	password: this.state.password,
	})
}
)
.then(res => res.json())
.then(data => {
if(data.error){
this.setState({error: data.error, loading: false})
}
else if(data.message){
this.setState({loading: false, error:"", password: "", password2: "", fname: "", lname: "", email: ""}) 
this.props.history.push("/login")

}
})}
else{                                     this.setState({loading: false, error:"Passwords Do not Match"});                     this.clearError()                         }

}
clearError = () => {
setTimeout(() => this.setState({error: ""}), 5000)
}


change = (e) => {
const {name, value} = e.target
this.setState({[name]: value})
}


render() {                                return(                                   <div>                                     <div className="container-fluid mt-5 mb-5">
<center>
<div className="col-md-6 card bg-dark text-light">
        <h4 className="mt-3">Register</h4>

	{this.state.loading?<div className="mt-3 mb-5"><div className="spinner-border"></div></div>	:	<form onSubmit={this.submit}>
{this.state.error?<div className="alert alert-danger">{this.state.error}</div> : null}
<input type="text" className="my-3 py-2 text-center form-control" placeholder="First Name..." required name="fname" onChange={this.change}/>

<input type="text" className="my-3 py-2 text-center form-control" placeholder="Last Name..." required name="lname" onChange={this.change}/>

<input type="email" className="my-3 py-2 text-center form-control" placeholder="Email..." required name="email" onChange={this.change}/>

<input type="password" className="my-3 py-
2 text-center form-control" placeholder="Password..." required name="password" onChange={this.change} /> 

<input type="password" className="my-3 py-2 text-center form-control" placeholder="Confirm Password" required name="password2"  onChange={this.change}/>

	{this.state.email}
<input type="submit" className="btn btn-outline-light my-
2 py-2" />                                                             <hr className="hr-outline-light" />       <p> Sign in if you have an account <Link to="/login">Here</Link></p>               </form>  }                               </div>                                    </center>                                 </div>
</div>
                                          )                                         }                                         }
                                          export default withRouter(Register);
