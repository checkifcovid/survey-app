import { SET_POSITION } from '../actions/positionActions'

const positionReducer = (
  state = {
    postcode: null,
    street: null,
    coordinates: {
      lat: null,
      lon: null,
    },
    country: null,
  },
  action
) => {
  switch (action.type) {
    case SET_POSITION: {
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      }
    }
    default:
      return { ...state }
  }
}

export default positionReducer
