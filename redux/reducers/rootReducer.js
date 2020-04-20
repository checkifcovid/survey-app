import { combineReducers } from 'redux'
import symptomsReducer from './symptomReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  symptoms: symptomsReducer,
  user: userReducer,
})

export default rootReducer
