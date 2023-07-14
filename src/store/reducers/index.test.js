import reducer, { userReducer } from './index'
import {
  login,
  loginStatus,
  postSubmtionContent,
  deletePost
} from '../actions'


describe('reducer', ()=>{
  const userInitialState = {}
  const postListInitialState = []

  const initialState = {
    user: userInitialState,
    posts: postListInitialState
  }

  it('returns teh initial state', ()=>{
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('handles LOGIN', ()=>{
    const user = {
      username: 'Ana',
      password: '2002'
    }
    const expectedState = {
      user: { profile: { username: 'Ana', password: '2002' } },
      posts: postListInitialState
    }

    expect(reducer(initialState, login(user))).toEqual(expectedState)
  })

  it('handles LOGIN_STATUS', ()=>{
    const status = true

    const expectedState = {
      user: { status: true },
      posts: postListInitialState
    }
    expect(reducer(initialState, loginStatus(status))).toEqual(expectedState)
  })

  it('handles POST_SUBMITION_CONTENT', ()=>{
    const post = {title: 'Title', author: 'Ana', content: 'Lorem ipsum'}

    const expectedState = {
      user: userInitialState,
      posts: [{title: 'Title', author: 'Ana', content: 'Lorem ipsum'}]
    }

    expect(reducer(initialState, postSubmtionContent(post))).toEqual(expectedState)
  })

  it('handles DELETE_POST', ()=>{

    const post = {title: 'Title', author: 'Ana', content: 'Lorem ipsum'}

    const currentPostList = [post, {title: 'Other Title', author: 'Jhon', content: 'Lorem ipsum'}]

    const currentState = {
      user: userInitialState,
      posts: currentPostList
    }

    const expectedState = {
      user: userInitialState,
      posts: [{title: 'Other Title', author: 'Jhon', content: 'Lorem ipsum'}]
    }
    
    expect(reducer(currentState, deletePost(post))).toEqual(expectedState)
  })
})