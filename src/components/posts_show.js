import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deletePost, fetchPost} from "../actions";
import {Link} from 'react-router-dom';

class PostsShow extends Component {
    componentWillMount() {
        const {match: {params: {id}}} = this.props;
        this.props.fetchPost(id)
    }

    onDeleteClick() {
        const {match: {params: {id}}} = this.props;
        this.props.deletePost(id)
            .then(() => {
                this.props.history.push("/post");
            })
    }

    render() {
        const {post} = this.props;
        if (!post) {
            return (
                <div>Loading...</div>
            )
        }

        return (
            <div>
                <Link to="/post">Back To List</Link>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
                <button
                    className="btn btn-danger"
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {post: state.posts.post};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);