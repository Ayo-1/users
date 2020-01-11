import React from "react"
import {BrowserRouter, Switch, Route} from"react-router-dom"
import Header from "./header.js"
import Footer from "./footer.js"
import Landing from "./landing.js"
import Login from "./login.js"
import Register from "./register.js"
import Profile from "./profile.js"



class Index extends React.Component {


	render() {
	return(
	<div>
	<BrowserRouter>
	<Header />
	    <Switch>
		<Route path="/" exact component={() => <Landing />} />
		<Route path="/login" component={() => <Login />} />
<Route path="/register" component={() => <Register />} />
<Route path="/user" component={() => <Profile />} />
<Route path="/" render={<center className="h1" style={{marginTop: "50px", marginBottom: "25px"}}> page not found</center>} />
	    </Switch>
        <Footer />
	</BrowserRouter>
	</div>
	)
	}

}


export default Index
