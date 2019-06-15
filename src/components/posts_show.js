import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link} from 'react-router-dom';

class PostsShow extends Component {
    componentWillMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.match.params.id)
            .then(() => {
                const {history} = this.props;
                history.push('/posts');
            });
    }

    render() {
        const {post} = this.props;

        if(!post) {
            return (
                <div>Loading...</div>
            );
        }
        return (
            <div>
                <div className="d-flex justify-content-between">
                    <Link to="/posts">Back To Index</Link>
                    <button
                        className="btn btn-danger"
                        onClick={this.onDeleteClick.bind(this)}
                    >
                        Delete Post
                    </button>
                </div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {post: state.posts.post};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);