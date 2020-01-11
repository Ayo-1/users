import React from "react";                 import {Link, withRouter} from "react-router-dom";  
import jwt_dec from "jwt-decode"


class Profile extends React.Component {
     constructor() {
	super()
	this.state = {

	fname: "",
	lname: "",
	email: "",
	date: ""
	}
     }   
UNSAFE_componentWillMount(){
if(!localStorage.userToken) {
this.props.history.push("/")
}

}
componentDidMount() {

const token = localStorage.userToken
const decoded = token? jwt_dec(token): ""
this.setState({fname: decoded.firstName, lname: decoded.lastName, email: decoded.email, date: decoded.created})
}	render() {                                return(                                   <div>                                     <div className="container-fluid mt-5 mb-5">                                         <center>                                  <div className="col-md-6 card bg-dark text-light">                                          <h4 className="mt-3">Details</h4> 

<p>First Name: {this.state.fname}</p>

   <p>Last Name: {this.state.lname}</p>                         <p> Email: {this.state.email}</p>         
						<p> Date Joined: {this.state.date}</p>              


						  
<span className="btn btn-danger btn-sm mb-2" onClick	={ () => {localStorage.removeItem("userToken");
this.props.history.push("/")
}}>logOut</span>
     </div>                           
						  </center>
						  </div>
         </div>                                    
)
					  }
}

export default withRouter(Profile);
