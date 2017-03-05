import axios from 'axios'

//REDUCER

const initialState = {
  products: [],
  selectedProduct: {}
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case "RECEIVE_PRODUCTS":
      newState.products = action.products
      break;

    case "RECEIVE_PRODUCT":
      newState.selectedProduct = action.product
      break;

    default: return state;
    }
  return newState
}

//ACTION CREATORS

export const receiveProducts = (products) => {
  return {
    type: "RECEIVE_PRODUCTS",
    products
  }
}

export const receiveProduct = (product) => {
  return {
    type: "RECEIVE_PRODUCT",
    product
  }
}


export default reducer
