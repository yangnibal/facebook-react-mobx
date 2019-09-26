import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Header from '../components/Header';

@inject('store')
@observer
class Profile extends Component {
    render() {
        return (
            <div>
                <Header/>
            </div>
        )
    }
}

export default Profile;