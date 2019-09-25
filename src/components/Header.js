import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import '../css/Header.css';

@inject('store')
@observer
class Header extends Component {
    render() {
        const { store } = this.props;
        if(store.isLogin===true) {
            return (
                <div className="header-wrapper">
                    <div><Link className="home-link" to="/">home</Link></div>
                    <div><Link className="myprofile-link" to="/profile/:user">myprofile</Link></div>
                    <div><button className="logout-button" onClick={store.handleLogin}>logout</button></div>
                </div>
            )
        }
        return (
            <div className="Header-Login-box">
                <LoginForm/>
                <div className="sign-wrapper">
                    <button className="Sign-in-button" type="submit"><Link className="Sign-in-loginbox-link">Sign In</Link></button>
                    <button className="Sign-up-button" type="submit"><Link className="Sign-up-loginbox-link">Sign Up</Link></button>
                </div>
            </div>
        )
    }
}

export default Header;