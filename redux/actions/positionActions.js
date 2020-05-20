// Action Types
export const SET_POSITION = 'SET_POSITION'

// Action Creator
export const setPosition = position => ({
  type: SET_POSITION,
  payload: position,
})
