import { UPDATE_USER } from '../actions/userActions'

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER: {
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
