import { combineReducers } from 'redux'
import calendarReducer from './calendarReducer'
import diagnosisReducer from './diagnosisReducer'
import symptomsReducer from './symptomReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  calendar: calendarReducer,
  diagnosis: diagnosisReducer,
  symptoms: symptomsReducer,
  user: userReducer,
})

export default rootReducer
