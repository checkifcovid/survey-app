import { combineReducers } from 'redux'
import calendarReducer from './calendarReducer'
import symptomsReducer from './symptomReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  calendar: calendarReducer,
  symptoms: symptomsReducer,
  user: userReducer,
})

export default rootReducer
