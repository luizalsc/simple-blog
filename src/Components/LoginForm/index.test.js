import { LoginForm } from '.'
import { Provider } from 'react-redux'
import { createMockStore } from "./testing-utils"
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Renders LoginForm correctly', ()=>{
  it('renders form correctly', ()=>{
    const store = createMockStore()

    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )

    const usernameInput = screen.getByPlaceholderText(/user/i)
    const passwordInput = screen.getByPlaceholderText('****')
    const submitButtonElement = screen.getByRole('button', {name:/Login/i})

    expect(usernameInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(submitButtonElement).toBeInTheDocument()
  })

  it('changes the input value after user typing', ()=>{
    const store = createMockStore()

    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )

    const usernameInput = screen.getByPlaceholderText(/user/i)
    const passwordInput = screen.getByPlaceholderText('****')

    act(()=>{
      userEvent.type(usernameInput, 'Ana')
      userEvent.type(passwordInput, '2002')
    })

    expect(usernameInput.value).toBe('Ana')
    expect(passwordInput.value).toBe('2002')
  })

  it('submits the login when button is clicked', ()=>{
    const store = createMockStore()
    const handleSubmit = jest.fn()

    render(
      <Provider store={store}>
        <LoginForm handleSubmit={handleSubmit} />
      </Provider>
    )
    const formElement = screen.getByRole('loginform')
    formElement.onsubmit = handleSubmit
    const submitButtonElement = screen.getByRole('button', {name:/Login/i})
    const usernameInput = screen.getByPlaceholderText(/user/i)
    const passwordInput = screen.getByPlaceholderText('****')

    act(()=>{
      userEvent.type(usernameInput, 'Ana')
      userEvent.type(passwordInput, '2002')
      userEvent.click(submitButtonElement)
    })

    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })
})