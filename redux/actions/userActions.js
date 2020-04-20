// Action Types
export const UPDATE_USER = 'UPDATE_USER'

// Action Creator
export const updateUser = (symptom) => ({
  type: UPDATE_USER,
  payload: symptom,
})
