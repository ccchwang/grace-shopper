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



// const AUTHENTICATED = 'AUTHENTICATED'
// export const authenticated = user => ({
//   type: AUTHENTICATED, user
// })

// export const login = (username, password) =>
//   dispatch =>
//     axios.post('/api/auth/login/local',
//       {username, password})
//       .then(() => dispatch(whoami()))
//       .catch(() => dispatch(whoami()))

// export const logout = () =>
//   dispatch =>
//     axios.post('/api/auth/logout')
//       .then(() => dispatch(whoami()))
//       .catch(() => dispatch(whoami()))

// export const whoami = () =>
//   dispatch =>
//     axios.get('/api/auth/whoami')
//       .then(response => {
//         const user = response.data
//         dispatch(authenticated(user))
//       })
//       .catch(failed => dispatch(authenticated(null)))

export default reducer
