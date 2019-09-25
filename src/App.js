import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Container from './container/Container';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
       			<Switch>
					<Container/>
					<Route exact path="/" component={Home}/>
					<Route path="/login" component={Login}/>
					<Route path="/profile/:userid" component={Profile}/>
					<Route path="/signup" component={Signup}/>
					<Route component={NoMatch}/>
        		</Switch>
    		</Router>
		)
	}
}

export default App;
