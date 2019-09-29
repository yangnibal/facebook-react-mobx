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
                <Link className="home-link" to="/">home</Link>
                <Link className="myprofile-link" to={`/profile/${store.name}`}>myprofile</Link>
                <Link className="newpost-link" to="/add_post">new post</Link>
                <Link className="login-link" to="/login"><div className="logout-button" onClick={store.handleLoginfalse}>logout</div></Link>
            </div>
        )
    }
}

export default Header;