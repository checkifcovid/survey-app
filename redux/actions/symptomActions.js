// Action Types
export const UPDATE_SYMPTOMS = 'UPDATE_SYMPTOMS'

// Action Creator
export const updateSymptom = symptom => ({
  type: UPDATE_SYMPTOMS,
  payload: symptom,
})
