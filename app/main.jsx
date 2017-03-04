'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import axios from 'axios'

import store from './store'
import Login from './components/Login'
import SignUp from './components/SignUp'
// import WhoAmI from './components/WhoAmI'
import HomePageContainer from './containers/HomePageContainer'
import AppContainer from './containers/AppContainer'
import SingleProductContainer from './containers/SingleProductContainer'
import CartContainer from './containers/CartContainer'
// import FilteredCategoryContainer from './containers/FilteredCategoryContainer'

//redux things
import { receiveProducts, receiveProduct } from './reducers/products'
import { receiveReviews } from './reducers/reviews'
import { receiveLineItems } from './reducers/cart'


const loadProductsAndCartItems = (nextState, replace, done) => {
  axios.get('/api/products')
    .then(products => store.dispatch(receiveProducts(products.data)))
    .then(() => {
      let userId = store.getState().auth.id;

      axios.get(`/api/cart/${userId}`)
          .then(cart => cart.data)
          .then(cart => store.dispatch(receiveLineItems(cart)))
    })
    .then(() => done())
    .catch(console.error)
}

const loadSingleProduct = (nextState, replace, done) => {
  axios.get(`/api/products/${nextState.params.productId}`)
    .then(productInfo => productInfo.data)
    .then(([product, reviews]) => {
      store.dispatch(receiveProduct(product));
      return store.dispatch(receiveReviews(reviews));
    })
    .then(() => done())
    .catch(console.error);
}

const loadCategorizedProducts = (nextState, replace, done) => {
  axios.get(`/api/category/${nextState.params.categoryName}`)
    .then(products => store.dispatch(receiveProducts(products.data)))
    .then(() => done())
    .catch(console.error)
}


render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <IndexRedirect to="/home" />
        <Route path="/home" component={HomePageContainer} onEnter={loadProductsAndCartItems} />
        <Route path="/products/:productId" component={SingleProductContainer} onEnter={loadSingleProduct}/>
        <Route path="/category/:categoryName" component={HomePageContainer} onEnter={loadCategorizedProducts} />
        <Route path="/cart" component={CartContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
