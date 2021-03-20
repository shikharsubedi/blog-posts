import jsonPlaceholder from '../api/jsonPlaceholder'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())
  // get  unique userIds from the posts
  const ids = new Set(getState().posts.map(post => post.userId))
  ;[...ids].map(id => dispatch(fetchUser(id)))
}

const fetchPosts = () => async dispatch => {
  const { data } = await jsonPlaceholder.get('/posts')
  dispatch({ type: 'FETCH_POSTS', payload: data })
}

const fetchUser = (userId) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${userId}`)
  dispatch({ type: 'FETCH_USER', payload: response.data })
}

export { fetchUser, fetchPosts }
