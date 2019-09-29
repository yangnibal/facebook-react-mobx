import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import '../css/LoginForm.css';

@inject('store')
@observer
class LoginForm extends Component {
    render() {
        const { store } = this.props;
        return (
            <div className="Header-Login-box">
                <div className="login-info-wrapper">
                    <input name="name" onChange={store.handleChange} className="login-name-input" type="text" value={store.name} placeholder="name"/>   
                    <input name="email" onChange={store.handleChange} className="login-email-input" type="text" value={store.email} placeholder="email"/>
                    <input name="password" onChange={store.handleChange} className="login-password-input" type="password" value={store.password} placeholder="password"/>
                </div>
                <div className="sign-wrapper">
                    <Link to={store.isLogin===true ? "/" : "/login"} onClick={store.handleLogintrue} className="Sign-in-link">Sign In</Link>
                    <Link to="/signup" className="Sign-up-link">Sign Up</Link>
                </div>
            </div>
        )
    }
}

export default LoginForm;