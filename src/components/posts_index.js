import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {fetchPosts} from "../actions";

class PostIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/post/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                List of blog posts
            </div>
        );
    }
}

export default connect(null, {fetchPosts})(PostIndex);