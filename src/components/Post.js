import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Post.css';

const Post = ({ title, name, id, onRemove }) => {
    return (
        <div className="post-wrapper">
            <div className="left-wrapper">
                <div className="post-title">제목:{title}</div>
                <Link className="post-name" to={`/profile/${name}`}>작성자:{name}</Link>
                <Link className="post-detail" to={`/profile/${name}/${id}`}>자세히 보기</Link>
            </div>
            <div className="button-post">
                <button className="remove-button" onClick={() => onRemove(id)}>삭제</button>
            </div>
        </div>
    )
}

export default Post;