import { SET_COUNTRY } from '../actions/configActions'

const configReducer = (
  state = {
    country: process.env.countries[0],
  },
  action
) => {
  console.log('s', action.payload)
  switch (action.type) {
    case SET_COUNTRY: {
      return {
        ...state,
        country: action.payload,
      }
    }
    default:
      return { ...state }
  }
}

export default configReducer
