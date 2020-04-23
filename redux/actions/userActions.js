// Action Types
export const UPDATE_USER = 'UPDATE_USER'

// Action Creator
export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
})
