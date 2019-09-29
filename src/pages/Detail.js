import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import DetailForm from '../components/DetailForm';

@inject('store')
@observer
class Detail extends Component {
    render() {
        const { store, match } = this.props;
        if(store.isLogin===false) {
            return (
                <div className="Login-please-wrapper">
                    <Link className="Login-please" to="/login">Login Please</Link>
                </div>
            )
        }
        return (
            <div className="detail-wrapper">
                <div className="header-wrapper">
                    <Header/>
                </div>
                <div className="index-wrapper">
                    <DetailForm id={store.postlist.id}/>
                </div>
            </div>
        )
    }
}

export default Detail;