import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

@inject('store')
@observer
class Header extends Component {
    render() {
        const { store } = this.props;
        return (
            <div className="header-wrapper">
                <div className="home-link" onClick={store.handletoHome}>home</div>
                <div className="myprofile-link" onClick={store.handletoProfile}>myprofile</div>
                <Link className="newpost-link" to="/add_post">new post</Link>
                <Link className="login-link" to="/"><div className="logout-button" onClick={store.handleLoginfalse}>logout</div></Link>
            </div>
        )
    }
}

export default Header;