import configureStore from 'redux-mock-store'

function createMockStore () {
  const mockStore = configureStore({})
  const store = mockStore({
    user:{
      status: true,
      profile:{
        username: 'Ana',
        password: '2002'
      }
    }
  })
  return store
}

export { createMockStore }