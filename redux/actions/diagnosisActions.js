// Action Types
export const UPDATE_DIAGNOSIS = 'UPDATE_DIAGNOSIS'

// Action Creator
export const updateDiagnosis = (diagnosis) => ({
  type: UPDATE_DIAGNOSIS,
  payload: diagnosis,
})
