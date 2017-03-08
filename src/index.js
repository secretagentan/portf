import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import DotsNBoxes from './components/projects/dots-n-boxes/DotsNBoxes.js'
import AltFacts from './components/projects/alt-facts/AltFacts.js'
import RipeAF from './components/projects/ripe-af/RipeAF.js'
import OhNo from './components/projects/oh-no/OhNo.js'
import Main from './components/main/Main.js'
import App from './components/app/App.js';
// import Project from './components/project/Project.js'
import './index.css'

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="dots-n-boxes" component={DotsNBoxes} />
      <Route path="ripe-af" component={RipeAF} />
      <Route path="alt-facts" component={AltFacts} />
      <Route path="oh-no" component={OhNo} />
      {/* <Route path="main" component={main}></Route>
        <Route path="dots-n-boxes" component={DotsNBoxes}
      </Route> */}
    </Route>
  </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
