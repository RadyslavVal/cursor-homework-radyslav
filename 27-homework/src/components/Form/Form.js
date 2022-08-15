import React, { Component } from "react";
import { connect } from "react-redux";
import './Form.css'
import { addPost } from '../../redux/action';


class Form extends Component {

    state = {
        author: {},
        content: '',
        image: '',
        date: '',
        postInfo: {
            likes: '0',
            comments: '0',
            reposts: '0',
        }
    }

    onChangeSelect = () => {
        let select = document.getElementById('form-select');
        let nameText = select.value;
        let authorInfo = this.props.authors.filter(info => info.author.name == nameText)[0].author;
        this.setState({ author: { ...authorInfo } })
    }

    onChangeLink = () => {
        let linkInput = document.getElementById('link');
        let link = linkInput.value;
        if (link.startsWith('http') &&
            (link.endsWith('.jpg') || link.endsWith('.jpeg')
                || link.endsWith('.png') || link.endsWith('.gif'))) {
            linkInput.style.backgroundColor = "rgb(27, 150, 99)";
            this.setState({ image: link })
        }
        else {
            linkInput.style.backgroundColor = "rgb(187, 64, 64)";
        }
    }
    onChangeText = () => {
        let text = document.getElementById('text');
        let date = new Date();
        let output = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();
        this.setState({
            content: text.value,
            date: output
        })
    }
    onChangePost = () => {
        let select = document.getElementById('form-select');
        let nameText = select.value;
        let authorInfo = this.props.authors.filter(info => info.author.name == nameText)[0].author;
        this.setState({ author: { ...authorInfo } })
    }
    onSubmitInput = () => {

        let text = document.getElementById('text');
        let linkInput = document.getElementById('link');
        if (linkInput.style.backgroundColor == "rgb(27, 150, 99)" && text.value.length > 1) {
            this.props.addPost(this.state);
            linkInput.value = ''
            text.value = ''
            linkInput.style.backgroundColor = '#d1d1d1'
            this.state = {
                author: {},
                content: '',
                image: '',
                date: '',
                postInfo: {
                    likes: '0',
                    comments: '0',
                    reposts: '0',
                }
            }
        }
    }

    render() {
        let authorsList = ['Sheev Palpatine', 'Luke Skywalker', 'Anakin skywalker'];
        return (
            <div className="form" onChange={this.onChangePost}>
                <div className="form-choise">
                    <div className="form-group">
                        <label className="form-label mt-4">Seleck author</label>
                        <select className="form-select" id='form-select' onChange={this.onChangeSelect}>
                            {authorsList.map((author, i) => <option value={author} key={i}>{author}</option>)}
                        </select>
                    </div>
                    <span>Example = http...format</span>
                    <input type="text" id='link' className="form-picture-link" placeholder="Insert a picture link" onChange={this.onChangeLink} />
                </div>
                <textarea id='text' name="content" type="text" className="form-textarea" placeholder="Add post text > 1char" onChange={this.onChangeText} />
                <button className="form-button btn btn-primary" onClick={this.onSubmitInput}>Add post</button>
            </div >
        )
    }
}

const getStateToProps = state => {
    return {
        authors: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => dispatch(addPost(post)),
    }
}

export default connect(getStateToProps, mapDispatchToProps)(Form);

