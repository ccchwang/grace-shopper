import axios from 'axios'

//REDUCER

const initialState = {
  name: "",
  address: ""
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case "RECEIVE_NAME":
      newState.name = action.name
      break;

    case "RECEIVE_ADDRESS":
      newState.address = action.address
      break;

    default: return state;
    }
  return newState
}

//ACTION CREATORS

export const receiveName = (name) => {
  return {
    type: "RECEIVE_NAME",
    rname
  }
}

export const receiveAddress = (address) => {
  return {
    type: "RECEIVE_ADDRESS",
    address
  }
}

export default reducer
