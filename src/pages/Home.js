import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Home extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}

export default Home;