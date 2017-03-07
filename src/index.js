import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app/App.js';
import Main from './components/main/Main.js'
import Project from './components/project/Project.js'

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="project" component={Project}></Route>
    </Route>
  </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
