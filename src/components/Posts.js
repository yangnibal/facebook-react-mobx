import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import LiveClock from './LiveClock';

@inject('store')
@observer
class Posts extends Component {

    render() {
        const { store } = this.props;
        return (
            <div className="posts-wrapper">
                <div className="post_title">{title}</div>
                <div className="post_name">{name}</div>
                <div className="post_published_date"><LiveClock/></div>
            </div>
        )
    }
}

export default Posts;