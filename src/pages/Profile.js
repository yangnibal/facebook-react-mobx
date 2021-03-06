import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../css/Profile.css';

@inject('store')
@observer
class Profile extends Component {
    render() { 
        const { store, match } = this.props;
        if(store.isLogin===false) {
            return (
                <div className="Login-please-wrapper">
                    <Link className="Login-please" to="/login">Login Please</Link>
                </div>
            )
        }
        if(match.params.username!==store.name) {
            return (
                <div>
                    <div className="header-wrapper">
                        <Header/>
                    </div>
                    <div className="cant-access-wrapper">
                        <h1 className="access-h1">이 계정에 접근할 수 있는 권한이 없습니다.</h1>
                    </div>
                </div>
            )
        }
        return (
            <div className="profile-wrapper">
                <div className="header-wrapper">
                    <Header/>
                </div>
                <div className="profile-contents">

                </div>
            </div>
        )
    }
}

export default Profile;