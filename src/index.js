import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Import redux stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import App from './App';

// Import reducers
import postReducer from './store/reducers/post';

/* 
    Deze regel hieronder is om ervoor te zorgen dat
    je de redux devtools kan gebruiken
*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*
    Je kan meerdere reducers hebben.
    In een ander project heb ik bijvoorbeeld een
    ProductReducer en een CartReducer. Op die manier
    houd je je code wat overzichtelijker.

    Hieronder worden ze dus weer samengevoegd zodat
    je ermee kan werken.

    De key "posts" is belangrijk, in de mapStateToProps zal
    je zien dat deze terugkomt.

    Als voorbeeld, nogmaals die cart en product reducers:

    stel ik wil alle producten ophalen:
    state.products.products

    stel ik wil alle cart items ophalen:
    state.cart.items
*/
const rootReducer = combineReducers({
    posts: postReducer
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
