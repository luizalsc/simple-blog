import {
  LOGIN,
  LOGIN_STATUS,
  POST_SUBMITION_CONTENT,
  
} from '../actions'
import { combineReducers } from "redux"


export function userReducer(state = {}, action){
  switch(action.type){
    case LOGIN: {
      return {...state, user: action.payload}
    }
    
    case LOGIN_STATUS: {
      return {...state, status: action.payload}
    }

    default:
      return state
  }
}

export function postReducer( state = {}, action){
  switch(action.type){
    case POST_SUBMITION_CONTENT: {
      return{
        ...state,
        content: action.payload
      }
    }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: userReducer
})

export default rootReducer
