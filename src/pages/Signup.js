import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import SignupForm from '../components/SignupForm';

@inject('store')
@observer
class Signup extends Component {
    render() {
        return (
            <div>
                <SignupForm/>
            </div>
        )
    }
}

export default Signup;