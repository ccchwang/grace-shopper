'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import axios from 'axios'

import store from './store'
import HomePageContainer from './containers/HomePageContainer'
import AppContainer from './containers/AppContainer'

//redux things
import { receiveProducts } from './reducers/products'


const loadProducts = () => {
  axios.get('/api/products')
    .then(products => {
      store.dispatch(receiveProducts(products.data))
    })
    .catch(console.error)
}


render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <Route path='/login' component={Login} />
        <IndexRedirect to="/home" />
        <Route path="/home" component={HomePageContainer} onEnter={loadProducts} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
