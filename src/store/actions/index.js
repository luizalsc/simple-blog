export const LOGIN = 'LOGIN'
export const LOGIN_STATUS = 'LOGIN_STATUS'
export const POST_SUBMITION_CONTENT = 'POST_SUBMITION_CONTENT'

// -- Create new user --

export function login (user){
  return{
    type: LOGIN,
    payload: user
  }
}
export function loginStatus (status){
  return{
    type: LOGIN_STATUS,
    payload: status
  }
}

export function postSubmtionContent (content){
  return{
    type: POST_SUBMITION_CONTENT,
    payload: content
  }
}