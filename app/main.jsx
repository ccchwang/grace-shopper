'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import axios from 'axios'

import store from './store'
import Login from './components/Login'
import SignUp from './components/SignUp'
import WhoAmI from './components/WhoAmI'
import HomePageContainer from './containers/HomePageContainer'
import AppContainer from './containers/AppContainer'
import SingleProductContainer from './containers/SingleProductContainer';

//redux things
import { receiveProducts, receiveProduct } from './reducers/products'


const loadProducts = () => {
  axios.get('/api/products')
    .then(products => store.dispatch(receiveProducts(products.data)))
    .catch(console.error)
}

const loadSingleProduct = (nextState) => {
  axios.get(`/api/products/${nextState.params.productId}`)
    .then(product => store.dispatch(receiveProduct(product.data)))
    .catch(console.error);
}


render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <IndexRedirect to="/home" />
        <Route path="/home" component={HomePageContainer} onEnter={loadProducts} />
        <Route path="/products/:productId" component={SingleProductContainer} onEnter={loadSingleProduct}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
