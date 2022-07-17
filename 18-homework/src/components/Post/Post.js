import React from 'react';
import './Post.css'

function Post({ data }) {
    const { author, content, image, date, postInfo } = data;
    const { name, photo, nickname } = author;
    const { likes, comments, reposts } = postInfo;
    return (
        <div className="post">
            <div className="post-card">
                <div className="post-header">
                    <div className="title-avatar">
                        <img src={author.avatar} alt="Avatar" />
                    </div>
                    <div className='post-content'>
                        <div className="post-title">
                            <div className="author-info">
                                <div className="author-nameSername">{author.name}</div>
                                <div className="author-nickname">{author.nickname}</div>
                            </div>
                            <div className="post-date">{data.date}</div>
                        </div>
                        <div className="post-text">{data.content}</div>
                    </div>
                </div>
                <div className="post-image">
                    <img src={data.image} alt="Content Image" />
                </div>
                {/* <div className="post-panel">
                    <div className="post-likes">{postInfo.likes}</div>
                    <div className="post-comments">{postInfo.comments}</div>
                    <div className="post-reposts">{postInfo}</div>
                </div> */}
            </div>
        </div>
    );
}

export default Post;