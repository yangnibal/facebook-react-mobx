import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../css/WritePost.css';

@inject('store')
@observer
class WritePost extends Component {
    render() {
        const { store } = this.props
        return (
            <div>
                <Header/>
                <div className="writepost-wrapper">
                    <div className="passage-wrapper">
                        <input
                            name="title"
                            className="title-input"
                            value={store.title}
                            onChange={store.handleChange}
                            placeholder="Please enter a title"
                        />
                        <input 
                            name="passage" 
                            className="passage-input" 
                            value={store.passage} 
                            onChange={store.handleChange} 
                            onKeyPress={store.handleKeyPress} 
                            placeholder="What's on your mind?"
                        />
                    </div>
                    <div>
                        <Link onClick={store.handleCreate} className="post-link" to="/home">Post</Link>
                        <Link className="cancle-link" to="/home">Cancle</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default WritePost;