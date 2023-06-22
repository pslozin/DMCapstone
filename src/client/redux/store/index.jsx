import { createStore, combineReducers } from 'redux'

import nameReducer from '../reducers/nameReducer'
import counterReducer from '../reducers/counterReducer'


const rootReducer =  combineReducers({
    nameReducer,
    counterReducer
  })

export default rootReducer