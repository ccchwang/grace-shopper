import axios from 'axios'

//REDUCER

const initialState = {
  lineItems: []
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case "RECEIVE_LINE_ITEM":
      newState.lineItems = [...newState.lineItems, action.lineItem]
      break;

    default: return state;
    }
  return newState
}

//ACTION CREATORS

export const receiveLineItem = (lineItem) => {
  return {
    type: "RECEIVE_LINE_ITEM",
    lineItem
  }
}

export default reducer

