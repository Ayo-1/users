import React from "react"
import jwt_dec from "jwt-decode"
import {withRouter} from "react-router-dom"
class Landing extends React.Component {

render() {


	const LoggedOut =  
		<div className="col-md-6 card bg-dark text-light">                                          <h4 className="mt-3">Welcome....</h4>                                       <p> Sign up if you don't have an account or log in if you have one.</p>                                                       <span className="btn btn-light my-2 py-2" onClick={() => this.props.history.push("/register")}>Sign Up</span>                                                           <span className="btn btn-outline-light my-2 py-2" onClick={() => this.props.history.push("/login")}>                                   Login   </span>
</div>;
const token = localStorage.userToken
const decoded = token ?jwt_dec(token): null
	const LoggedIn =                                             <div className="col-md-6 card bg-dark text-light">                                          <h4 className="mt-3">Welcome <span className="font-weight-bold text-italic h5">

	{token? decoded.firstName: null} {token? decoded.lastName: null}
	</span></h4>                                       <p> Thank You for registering. We hope you find It interesting</p>
</div>

return(
<div>
<div className="container-fluid mt-5 mb-5">
<center>
{localStorage.userToken? LoggedIn: LoggedOut}
</center>
</div>
</div>
)
}
}

export default withRouter(Landing)
