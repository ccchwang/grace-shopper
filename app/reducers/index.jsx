import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./products').default,
  reviews: require('./reviews').default,
  cart: require('./cart').default
})

export default rootReducer
