import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Login extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}

export default Login;