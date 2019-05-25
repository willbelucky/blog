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
                <Link to={"post/" + post.id} key={post.id}>
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col">
                                <strong>{post.title}</strong>
                            </div>
                            <div className="categories col">
                                <span>{post.categories}</span>
                            </div>
                        </div>
                    </li>
                </Link>
            );
        });
    }

    render() {
        return (
            <div>
                <div id="post-list-header" className="row">
                    <div className="col">
                        <h3>Posts</h3>
                    </div>
                    <div id="new-post-btn" className="col">
                        <Link to="/post/new" className="btn btn-primary">Add a Post</Link>
                    </div>
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