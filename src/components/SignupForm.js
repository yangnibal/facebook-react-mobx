import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import '../css/SignupForm.css';

@inject('store')
@observer
class SignupForm extends Component {
    render() {
        const { store } = this.props;
        return (
            <div className="signup-wrapper">
                <div className="signup-input-wrapper">
                    <input type="text" name="name" className="signup-input-name" value={store.name} onChange={store.handleChange} placeholder="name"/>
                    <input type="text" name="phone" className="signup-input-phone" value={store.phone} onChange={store.handleChange} placeholder="phone"/>
                    <input type="text" name="email" className="signup-input-email" value={store.email} onChange={store.handleChange} placeholder="email"/>
                    <input type="password" name="password" className="signup-input-password" value={store.password} onChange={store.handleChange} placeholder="password"/>
                    <input type="password" name="passwordcheck" className="signup-input-password" value={store.passwordcheck} onChange={store.handleChange} placeholder="password-check"/>
                    <button type="submit" onClick={store.isPwChecked} className="password-check-button">check</button>
                </div>
                <div className="signup-button-wrapper">
                    <Link to="/home" className="signin-button" onClick={store.handleLogintrue}>sign in</Link>
                </div>
            </div>
        )
    }
}

export default SignupForm;