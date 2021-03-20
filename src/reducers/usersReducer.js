const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return { ...state, [action.payload.id]: action.payload }
  }
  return state
}

export default usersReducer
