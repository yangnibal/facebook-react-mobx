import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Store from '../store/Store';
import Header from '../components/Header';
import '../css/Home.css';
import PostList from '../components/PostList';

@inject('store')
@observer
class Home extends Component {
    render() {
        const { store } = this.props;
        if(Store.isLogin===false) {
            return (
                <div className="Login-please" onCLick={store.handletoLogin}>Login Please</div>
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