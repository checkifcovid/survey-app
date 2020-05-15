// Action Types
export const SET_COUNTRY = 'SET_COUNTRY'

// Action Creator
export const setCountry = country => ({
  type: SET_COUNTRY,
  payload: country,
})
