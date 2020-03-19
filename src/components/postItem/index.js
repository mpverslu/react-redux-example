import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './postitem.module.css';

export const PostItem = props => {
    const post = props.post;

    return (
        <div key={post.id} className={classes.PostItem}>
            <NavLink to={"/post/" + post.id}>
                <h2>{post.title}</h2>
            </NavLink>
            <p>{post.author}</p>
            {/* 
                Slecht voorbeeld, je moet natuurlijk niet
                je body gaan slicen in je component, dat moet
                je van tevoren afhandelen, maar goed fuck dat even
            */}
            <p>{post.body.slice(0, 200) + '...'}</p>
        </div>
    )
}