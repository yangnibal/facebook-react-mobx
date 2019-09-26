import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import LiveClock from './LiveClock';
import '../css/Post.css';

@inject('store')
@observer
class Posts extends Component {
    render() {
        const { store } = this.props;
        return (
            <div className="post-wrapper" onClick={store.handletoPost}>
                <div className="post_title">{store.title}</div>
                <div className="post_name">{store.name}</div>
                <div className="post_published_date"><LiveClock/></div>
            </div>
        )
    }
}

export default Posts;