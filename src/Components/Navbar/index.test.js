import { Navbar } from '.'
import { Provider } from 'react-redux'
import { createMockStore } from "./testing-utils"
import { render, screen, act } from '@testing-library/react'

describe('Renders Navbar component correctly', ()=>{
  it('renders navbar correctly before login', ()=>{
    const store = createMockStore()
    store.getState().user = {}

    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    )

    const titleElement = screen.getByRole('heading', {name:/My Blog/i})
    const paragraphElement = screen.getByRole('paragraph')

    expect(titleElement).toBeInTheDocument()
    expect(paragraphElement).toBeInTheDocument()
 
  })

  it('renders navbar correctly after login', ()=>{
    const store = createMockStore()
   
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    )

    const titleElement = screen.getByRole('heading', {name:/My Blog/i})
    const paragraphElement = screen.getByRole('paragraph')

    expect(titleElement).toBeInTheDocument()
    expect(paragraphElement).toHaveTextContent('Bem-vindo(a) Ana')
 
  })
})