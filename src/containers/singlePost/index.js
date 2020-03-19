import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../store/actions/post';

import classes from './singlepost.module.css';
import { NavLink } from 'react-router-dom';

class singlePost extends Component {
    
    componentDidMount() {
        this.props.onInitFetchPosts();
    }

    render() {
        const postId = this.props.match.params.id;
        const post = this.props.posts.find(post => post.id === parseInt(postId));

        let postElement = (
            <div className={classes.Post}>
                <h1>Could not find a post with this ID!</h1>
            </div>
        )

        if (post) {
            postElement = (
                <div className={classes.Post}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            )
        }

        return (
            <Fragment>
                <NavLink to="/"><div className={classes.Button}>Back</div></NavLink>
                {postElement}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitFetchPosts: () => dispatch(fetchPosts())
    }
}

export const SinglePost = connect(mapStateToProps, mapDispatchToProps)(singlePost);