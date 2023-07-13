import configureStore from 'redux-mock-store'

function createMockStore () {
  const mockStore = configureStore({})
  const store = mockStore({
    user: {
      status: true,
      user: {
        username: 'Ana',
        password: '2002'
      }
    }
  })
  return store
}

export { createMockStore }