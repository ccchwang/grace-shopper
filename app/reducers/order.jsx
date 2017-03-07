import axios from 'axios'

//REDUCER

const initialState = {
  selectedOrder: {}
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case "RECEIVE_ORDER":
      newState.selectedOrder = action.order
      break;

    default: return state;
    }
  return newState
}

//ACTION CREATORS

export const receiveOrder = (order) => {
  return {
    type: "RECEIVE_ORDER",
    order
  }
}


export default reducer
