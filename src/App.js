import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home, SinglePost } from './containers';

import classes from './app.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Switch>
        <Route path="/post/:id" component={SinglePost} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
