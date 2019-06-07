import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {fetchPosts} from "../actions";

class PostIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link className="d-flex justify-content-between" to={"posts/" + post.id}>
                        <strong>{post.title}</strong>
                        <span className="pull-xs-right">{post.categories}</span>
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-between">
                    <h3>Posts</h3>
                    <Link to="/post/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts.all};
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex);