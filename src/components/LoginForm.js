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
                    <input className="login-email-input" type="text" value={store.email} placeholder="email"/>
                    <input className="login-password-input" type="password" value={store.password} placeholder="password"/>
                </div>
                <div className="sign-wrapper">
                    <Link onClick={store.handleLogin} to="/" className="Sign-in-link">Sign In</Link>
                    <Link to="/signup"className="Sign-up-link">Sign Up</Link>
                </div>
            </div>
        )
    }
}

export default LoginForm;