import * as actions from './index'

describe('actions', ()=>{
  describe('returns the correct action when', ()=>{
    it('deletes a post', ()=>{
      const post = {title: 'Title', author: 'Ana', content: 'Lorem ipsum'}
      const expectedAction = {type: actions.DELETE_POST, payload: post}

      expect(actions.deletePost(post)).toEqual(expectedAction)
    })

    it('adds a post', ()=>{
      const post = {title: 'Title', author: 'Ana', content: 'Lorem ipsum'}
      const expectedAction = {type: actions.POST_SUBMITION_CONTENT, payload: post}

      expect(actions.postSubmtionContent(post)).toEqual(expectedAction)
    })

    it('logins a user', ()=>{
      const user = {username: 'Ana', password: '2002'}
      const expectedAction = {type: actions.LOGIN, payload: user}

      expect(actions.login(user)).toEqual(expectedAction)
    })

    it('changes login status', ()=>{
      const status =  true
      const expectedAction = {type: actions.LOGIN_STATUS, payload: status}

      expect(actions.loginStatus(status)).toEqual(expectedAction)
    })

  })
})