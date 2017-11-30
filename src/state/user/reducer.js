const user = (state = null, action) => {
  switch (action.type) {
    case `RECEIVE_BUNGIENET_USER_DATA`:
      switch (action.status) {
        case `success`:
          return {
            ...state,
            user: action.data,
          }
        default:
          return state
      }
    default:
      return state
  }
}

export default user
