const oauth = (state = { isAuthenticated: false }, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        oauth: { isAuthenticated: true },
      }
    case 'LOG_OUT':
      return {
        ...state,
        oauth: { isAuthenticated: false },
      }
    default:
      return state
  }
}

export default oauth
