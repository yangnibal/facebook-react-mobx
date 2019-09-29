import React,{ Component } from 'react';
import { inject, observer } from 'mobx-react';

@observer
@inject('store')
class DetailForm extends Component {
    render() {
        const { store, id } = this.props
        return (
            <div id={id} className="detailform-wrapper">
                <div>{store.title}</div>
                <div>{store.name}</div>
                <div>{store.passage}</div>
            </div>
        )
    }
}

export default DetailForm;