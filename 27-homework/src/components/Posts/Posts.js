import React, { Component } from "react";
import Post from "../Post/Post";
import { connect } from "react-redux";


class Posts extends Component {
    render() {
        const { posts } = this.props;
        return (
            <div>
                {
                    posts.map((post, index) => <Post data={post} key={index}></Post>)
                }
            </div>
        )
    }
}

const getStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(getStateToProps, null)(Posts);