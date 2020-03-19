import * as actions from '../actions/types';
import { updateObject } from '../../shared/utility';

const initialState = {
    posts: []
}

/* 
    Een setup met een losse functie zoals dit is
    in principe niet nodig in dit geval.
    Je kan namelijk ook prima in de switch case:

    return updateObject(state, { posts: posts });

    kunnen doen, maar dit is even ter illustratie
    van een veelgebruikt pattern.

    Die updateObject heb ik overigens uit die cursus,
    maar vind het wel een handig principe.
*/
const setFetchedPosts = (state, {posts}) => {
    console.log('(PostReducer) Setting posts!');

    return updateObject(state, {
        posts: posts
    });
}


/*
    De reducer, het idee is dus dat whatever je returned
    je volgende state zal zijn.
    Je kan dus ook hier altijd 

    { Post: 'kek' }

    kunnen returnen en dan is je state dus wat dan ook { Post: 'kek' }
    Dit is dus ook de plek waar je je state kan updaten en aanpassen,
    let wel op: doe dit immutable!!!
    je mag niet, zoals in vue, 
    
    state.posts = ['kek'] 
    
    doen, dit kan voor
    onvoorzien gedrag zorgen. 
    
    state.posts.push('kek') mag dus ook niet, 
    maar 

    const newState = state.posts.concat('kek') 
    
    wel, want it genereert
    een nieuwe array.
*/
const reducer = (state = initialState, action) => {
    switch (action.type) {
        /*
            Hier komt die action uit het types.js bestand weer terug
        */
        case (actions.FETCH_POSTS):
            return setFetchedPosts(state, action);
        default:
            return state;
    }
}

export default reducer;