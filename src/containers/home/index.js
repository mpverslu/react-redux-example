import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../store/actions/post';

import { PostItem } from '../../components';

class home extends Component {
    
    componentDidMount() {
        this.props.onInitFetchPosts();
    }

    render() {
        const postElements = this.props.posts.map(post => {
            return (
                <PostItem key={post.id} post={post} />
            )
        })

        return (
            /*
                Fragments zijn wel geniaal. JSX heeft deze limitatie dat je maar 1
                top-level element mag hebben, maar je wil je pagina ook niet vullen
                met overbodige divs. Daarvoor heeft react dit Fragment element wat
                zorgt dat je om deze limitatie heen kan werken en uiteindelijk komt
                dit element niet in de DOM terecht.
            */
            <Fragment>
                <h1>Alle posts!</h1>
                {postElements}
            </Fragment>
        );
    }
}

/*
    Hier was je volgens mij al mee bekend.
*/

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

export const Home = connect(mapStateToProps, mapDispatchToProps)(home);