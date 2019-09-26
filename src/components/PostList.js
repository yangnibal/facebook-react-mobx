import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Posts from './Posts';

@inject('store')
@observer
class PostList extends Component {
    static defaultProps = {
        list: []
    }
    render() {
        const { store } = this.props;
        const list = data.map(
            info => {
                <Posts
                    key={store.id}
                    title={store.title}
                    name={store.name}
                />
            }
        )
        return (
            <div>
                {store.list}
            </div>
        )
    }
}

export default PostList;