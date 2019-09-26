import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import LoginForm from '../components/LoginForm';

@inject('store')
@observer
class Login extends Component {
    render() {
        return (
            <div>
                <LoginForm/>
            </div>
        )
    }
}

export default Login;