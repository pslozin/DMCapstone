import { createStore, combineReducers } from 'redux'

import nameReducer from '../reducers/nameReducer'
import counterReducer from '../reducers/counterReducer'
import cartReducer from '../reducers/cartreducer'
import cartshowitems from '../reducers/cartshowitems'


const rootReducer =  combineReducers({
    cartReducer,
    cartshowitems

  })

export default rootReducer