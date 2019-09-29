import React,{ Component } from 'react';
import { inject, observer } from 'mobx-react';
import '../css/DetailForm.css';

@inject(store => ({
    findlist: store.store.findlist
}))
@observer
class DetailForm extends Component {
    render() {
        const { findlist } = this.props
        return (
            <div className="detailform-wrapper">
                <div className="content-title">{findlist.title}</div>
                <div className="content-name">{findlist.name}</div>
                <div className="content-passage">{findlist.passage}</div>
            </div>
        )
    }
}

export default DetailForm;

