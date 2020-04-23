import { UPDATE_CALENDAR } from '../actions/calendarActions'

const today = new Date()
const formattedDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`

const calendarReducer = (state = {
  tested: formattedDate,
  onset: formattedDate,
  subsided: formattedDate,
}, action) => {
  switch (action.type) {
    case UPDATE_CALENDAR: {
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      }
    }
    default:
      return { ...state }
  }
}

export default calendarReducer
