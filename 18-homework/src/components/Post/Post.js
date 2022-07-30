import React from 'react';
import './Post.css'
import like from './image/like.png';
import comment from './image/comment.png';
import repost from './image/repost.png';

function Post({ data }) {
    const { author, content, image, date, postInfo } = data;
    const { name, avatar, nickname } = author;
    const { likes, comments, reposts } = postInfo;
    return (
        <div className="post">
            <div className="post-card">
                <div className="post-header">
                    <div className="title-avatar">
                        <img src={avatar} alt="Avatar" />
                    </div>
                    <div className='post-content'>
                        <div className="post-title">
                            <div className="author-info">
                                <div className="author-nameSername">{name}</div>
                                <div className="author-nickname">{nickname}</div>
                            </div>
                            <div className="post-date">{date}</div>
                        </div>
                        <div className="post-text">{content}</div>
                    </div>
                </div>
                <div className="post-image">
                    <img src={image} alt="Content" />
                </div>
                <p className='post-footer'>
                    <span className="post-element">
                        <img src={like} alt='like' className='footer-image' />
                        <label> {likes} Likes</label>
                    </span>
                    <span className="post-element">
                        <img src={comment} alt='comment' className='footer-image' />
                        <label> {comments} Comments</label>
                    </span>
                    <span className="post-element">
                        <img src={repost} alt='repost' className='footer-image' />
                        <label> {reposts} Reposts</label>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Post;