import axios from 'axios'

//REDUCER

const initialState = {
  reviews: []
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case "RECEIVE_REVIEWS":
      newState.reviews = action.reviews
      break;

    case "RECEIVE_REVIEW":
      newState.reviews.concat(action.review)
      break;

    default: return state;
    }
  return newState
}

//ACTION CREATORS

export const receiveReviews = (reviews) => {
  return {
    type: "RECEIVE_REVIEWS",
    reviews
  }
}

export const receiveReview = (review) => {
  return {
    type: "RECEIVE_REVIEW",
    review
  }
}



export default reducer
