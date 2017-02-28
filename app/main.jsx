'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import HomePage from './components/HomePage'
import AppContainer from './containers/AppContainer'



render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={HomePage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
