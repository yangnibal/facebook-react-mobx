import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

@inject('store')
@observer
class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <div><Link className="home-link" to="/">home</Link></div>
                <div><Link className="myprofile-link" to="/profile/:user">myprofile</Link></div>
                <div><Link className="login-link" to="/login">login</Link></div>
                <div><Link className="signup-link" to="/signup">sign up</Link></div>
            </div>
        )
    }
}

export default Header;