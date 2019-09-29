import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Header from '../components/Header';
import '../css/Home.css';
import PostList from '../components/PostList.js';
import { Link } from 'react-router-dom';

@inject('store')
@observer
class Home extends Component {
    render() {
        const { store } = this.props;
        if(store.isLogin===false) {
            return (
                <div className="Login-please-wrapper">
                    <Link className="Login-please" to="/login">Login Please</Link>
                </div>
            )
        }
        return (
            <div className="home-container">
                <div className="header-wrapper">
                    <div className="header"><Header/></div>
                    <div className="hello-name">Welcome Back!, {store.name}</div>
                </div>
                <div className="white-space"></div>
                <div className="content-wrapper">
                    <PostList/>
                </div>
            </div>
        )
    }
}

export default Home;