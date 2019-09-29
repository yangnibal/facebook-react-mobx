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
                    <input type="text" name="signupname" className="signup-input-name" value={store.signupname} onChange={store.handleChange} placeholder="name"/>
                    <input type="text" name="signupphone" className="signup-input-phone" value={store.signupphone} onChange={store.handleChange} placeholder="phone"/>
                    <input type="text" name="signupemail" className="signup-input-email" value={store.signupemail} onChange={store.handleChange} placeholder="email"/>
                    <input type="password" name="signuppassword" className="signup-input-password" value={store.signuppassword} onChange={store.handleChange} placeholder="password"/>
                    <input type="password" name="signuppasswordcheck" className="signup-input-password" value={store.signuppasswordcheck} onChange={store.handleChange} placeholder="password-check"/>
                    <div onClick={() => store.handlePwChecked()} className="password-check-button">check</div>
                </div>
                <div className="signup-button-wrapper">
                    <Link className="signin-button" onClick={() => store.handleSignuptrue()} to={store.isLogin===true ? "/login" : "/signup"}>sign in</Link>
                </div>
            </div>
        )
    }
}

export default SignupForm;