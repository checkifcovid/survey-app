import { UPDATE_SYMPTOMS } from '../actions/symptomActions'

const symptomsReducer = (state = {
  fever: false, cough: false, shortness_breath: false,
}, action) => {
  switch (action.type) {
    case UPDATE_SYMPTOMS: {
      // console.log('current_state', state)
      // console.log('payload', action.payload)
      return {
        ...state,
        [action.payload]: !state[action.payload],
      }
    }
    default:
      return { ...state }
  }
}

export default symptomsReducer
