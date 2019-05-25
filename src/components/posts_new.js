import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {createPost} from "../actions/index";
import {renderField} from '../form-helpers';
import {required} from '../form-validate';

const PostsNewForm = reduxForm({
    form: 'PostsNew'
})(props => {
    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <h3>Create A New Post</h3>
            <Field
                name="title"
                label="Title"
                component={renderField}
                type="text"
                validate={[required]}
                className="form-control"
            />
            <Field
                name="categories"
                label="Categories"
                component={renderField}
                type="text"
                validate={[required]}
                className="form-control"
            />
            <Field
                name="content"
                label="Content"
                component={renderField}
                type="textarea"
                validate={[required]}
                className="form-control"
            />

            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/post" className="btn btn-danger">Cancel</Link>
        </form>
    )
});

class PostsNew extends Component {
    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                this.props.history.push('/post');
            });
    }

    render() {
        return <PostsNewForm onSubmit={this.onSubmit.bind(this)}/>
    }
}

export default connect(null, {createPost})(PostsNew);