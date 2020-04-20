import { UPDATE_USER } from '../actions/userActions'

const userReducer = (state = {
  total: 0, postcode: null,
}, action) => {
  switch (action.type) {
    case UPDATE_USER: {
      console.log('current_state', state)
      console.log('payload', action.payload)
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      }
    }
    default:
      return { ...state }
  }
}

export default userReducer
