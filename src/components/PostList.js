import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Posts from './Posts';
import '../css/PostList.css';

@inject('store')
@observer
class PostList extends Component {
    static defaultProps = {
        list: []
    }
    render() {
        const { store } = this.props;
        const list = store.info.map(
            (info, index) => (
                <Posts
                    key={index}
                    id={store.id}
                    title={store.title}
                    name={store.name}
                />
            )
        )
        return (
            <div className="postlist-wrapper">
                {list}
            </div>
        )
    }
}

export default PostList;