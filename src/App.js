import React, { Component } from 'react';
import { Route, Switch } from  'react-router-dom';
import { observer, inject } from 'mobx-react';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import './App.css';

@inject('store')
@observer
class App extends Component {
	render() {
		return (
			<div>
       			<Switch>
					<Route exact path="/" component={Login}/>
					<Route path="/home" component={Home}/>
					<Route path="/profile/:userid" component={Profile}/>
					<Route path="/signup" component={Signup}/>
					<Route component={NoMatch}/>
        		</Switch>
    		</div>
		)
	}
}

export default App;
