import React, { Component } from 'react';
import './Post.css'
import likePng from './image/like.png';
import commentPng from './image/comment.png';
import repostPng from './image/repost.png';
import addLikePng from './image/addLike.png';
import addCommentPng from './image/addComment.png';
import addRepostPng from './image/addRepost.png';

class Post extends Component {

    clickLike = (e) => {
        let span = e.target.closest('span');
        let likeImg = span.childNodes[0];
        if (!span.classList.contains('add')) {
            span.childNodes[1].textContent++;
            likeImg.src = addLikePng;
            span.classList.add('add')
        }
        else {
            likeImg.src = likePng;
            span.childNodes[1].textContent--;
            span.classList.remove('add')
        }
    };



    clickComment = (e) => {
        let span = e.target.closest('span');
        let commentImg = span.childNodes[0];
        if (!span.classList.contains('add')) {
            span.childNodes[1].textContent++;
            commentImg.src = addCommentPng;
            span.classList.add('add')
        }
        else {
            commentImg.src = commentPng;
            span.childNodes[1].textContent--;
            span.classList.remove('add')
        }
    };

    clickRepost = (e) => {
        let span = e.target.closest('span');
        let reportImg = span.childNodes[0];
        if (!span.classList.contains('add')) {
            span.childNodes[1].textContent++;
            reportImg.src = addRepostPng;
            span.classList.add('add')
        }
        else {
            reportImg.src = repostPng;
            span.childNodes[1].textContent--;
            span.classList.remove('add')
        }
    };

    render() {
        const { author, content, image, date, postInfo } = this.props.data;
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
                        <img src={image} alt="ContentImage" />
                    </div>
                    <div className='post-footer'>
                        <span className="footer-element" onClick={this.clickLike}>
                            <img id='like' src={likePng} alt='like' className='footer-image' />
                            <p>{likes}</p>
                        </span>
                        <span className="footer-element" onClick={this.clickComment}>
                            <img id='comment' src={commentPng} alt='comment' className='footer-image' />
                            <p >{comments}</p>
                        </span>
                        <span className="footer-element" onClick={this.clickRepost}>
                            <img id='repost' src={repostPng} alt='repost' className='footer-image' />
                            <p > {reposts} </p>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}


export default Post;