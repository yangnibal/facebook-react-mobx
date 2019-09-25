import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Header from '../components/Header';
import '../css/Container.css';

@inject('store')
@observer
class Container extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
            </div>
        )
    }
}

export default Container;