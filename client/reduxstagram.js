import React from 'react';

import { render } from 'react-dom';


//css
import css from './styles/style.styl';

//components
import App from './components/App';
import PhotGrid from './components/PhotoGrid';
import Single from './components/Single';

//import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

Raven.config(sentry_url, {
  tags: {
    git_commit: 'asdfas908f',
    userLevel: 'editor'
  }
}).install();


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)


render(router, document.getElementById('root'))
