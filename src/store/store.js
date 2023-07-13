import {createStore} from 'redux'
import { combineReducers } from 'redux'
import { userReducer } from './reducers'

const rootReducer = combineReducers({
  user: userReducer
})

const store = createStore(rootReducer)

export { store }