import axios from '../../axios.jsonplaceholder';
import * as types from '../actions/types';

/* 
    Deze hoef je niet te exporten, maar stel je wil
    de posts setten zonder eerst een API call te doen via
    fetchPosts, dan doe je het op deze manier.

    Deze onderstaande manier gebruik je bijvoorbeeld ook
    wanneer je een winkelwagen hebt en 1 product wil toevoegen.
    Het product is dan de data en het type zal iets zijn als type: types.ADD_PRODUCT_TO_CART
*/
export const saveFetchedPosts = (posts) => {
    console.log('(SaveFetchedPosts) Saving posts!');
    
    return {
        type: types.FETCH_POSTS,
        posts: posts
    }
}

/*
    Beetje apart: return (dispatch, getState) => {}
    Deze dispatch en getState functie krijg je van redux-thunk
    Hiermee kan je async calls dispatchen naar je reducer.
*/
export const fetchPosts = () => {
    console.log('(Post Action) Fetch posts');
    return (dispatch, getState) => {
        const state = getState();

        if (state.posts.posts.length <= 0) {
            console.log('(Post Action) Reloading posts!');

            axios.get('/posts')
                .then(response => {
                    console.log('(Post Action) Posts fetched!');

                    /*
                        Posts van jsonplaceholder hebben geen author 
                        dus die voegen we even toe
                    */

                    const data = response.data.map(post => {
                        return {
                            ...post,
                            author: 'Maus'
                        }
                    })

                    dispatch(saveFetchedPosts(data));
                })
                .catch(err => {
                    console.log('(Post Action) Error fetching posts!');
                })

        } else {
            console.log('(Post Action) Posts cached!');
        }
    }
}