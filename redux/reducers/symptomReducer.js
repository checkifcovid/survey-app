import { UPDATE_SYMPTOMS } from '../actions/symptomActions'

const symptomsReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SYMPTOMS: {
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
