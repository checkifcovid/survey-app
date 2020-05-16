import { UPDATE_DIAGNOSIS } from '../actions/diagnosisActions'

const diagnosisReducer = (
  state = {
    tested: true,
    result: false,
  },
  action
) => {
  switch (action.type) {
    case UPDATE_DIAGNOSIS: {
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      }
    }
    default:
      return { ...state }
  }
}

export default diagnosisReducer
