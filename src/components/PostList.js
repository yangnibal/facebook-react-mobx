import React from 'react';
import { inject, observer } from 'mobx-react';
import Post from './Post';
import '../css/PostList.css';

const PostList = ({ lists, onRemove, onFind }) => {
    const posts = lists.map(post => (
        <Post
            name={post.name}
            title={post.title}
            passage={post.passage}
            key={post.id}
            id={post.id}
            onRemove={onRemove}
            onFind={onFind}
        />
    ));
    return (
        <div className="postlist-wrapper">{posts}</div>
    )
}

export default inject(({ store }) => ({
    lists: store.postlist,
    onRemove: store.handleRemove,
    onFind: store.handleFind,
}))(observer(PostList));