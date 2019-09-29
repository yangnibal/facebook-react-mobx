import React, { Component } from 'react';
import { Route, Switch } from  'react-router-dom';
import { observer, inject } from 'mobx-react';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import WritePost from './pages/WritePost';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import './App.css';

@inject('store')
@observer
class App extends Component {
	render() {
		return (
			<div>
       			<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/profile/:username" component={Profile}/>
					<Route path="/login" component={Login}/>
					<Route path="/profile/:username/:id" component={Detail}/>
					<Route path="/signup" component={Signup}/>
					<Route path="/add_post" component={WritePost}/>
					<Route component={NoMatch}/>
        		</Switch>
    		</div>
		)
	}
}

export default App;
