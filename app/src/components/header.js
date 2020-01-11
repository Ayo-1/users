import React from "react"
import {withRouter} from "react-router-dom"
class Header extends React.Component {

	render() {
	const allLink = <ul className="navbar-nav mr-auto"> 
	<li className="nav-item active">
        <a className="nav-link" onClick={() => this.props.history.push("/")}>Home </a>
      </li>                                     <li className="nav-item">                       <a className="nav-link" onClick={() => this.props.history.push("/login")}>Login</a>                                             </li>                                       <li className="nav-item">                       <a className="nav-link" onClick={() => this.props.history.push("/register")}>Register</a>                                             </li>
	</ul>


const userLink = <ul className="navbar-nav mr-auto"><li className="nav-item active">
        <a className="nav-link" onClick={() => this.props.history.push("/")}>Home </a>
      </li>        
	<li className="nav-item">
	<a className="nav-link" onClick={() => this.props.history.push("/user")}>Profile</a>
	</li>
	<li className="nav-item">                       <a className="nav-link" onClick={() => {

localStorage.removeItem("userToken")
this.props.history.push("/")

      }}>Logout</a>
</li>
</ul>



return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
  <a className="navbar-brand" href="#">Ayo App</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {localStorage.userToken? userLink: allLink}

  </div>
</nav>

)
	}


}

export default withRouter(Header)
