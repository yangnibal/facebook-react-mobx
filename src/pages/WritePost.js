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
                <div className="header-wrapper">
                    <Header/>
                </div>
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
                        <Link onClick={() => store.handleUpload()} className="post-link" to="/">Post</Link>
                        <Link onClick={store.handleRemove} className="cancle-link" to="/">Cancle</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default WritePost;