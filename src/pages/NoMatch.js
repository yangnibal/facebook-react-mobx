import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class NoMatch extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}

export default NoMatch;