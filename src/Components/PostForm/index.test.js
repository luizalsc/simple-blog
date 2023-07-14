import { PostForm } from '.'
import { createMockStore } from './testing-utils'
import { Provider } from 'react-redux'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Renders PostForm correctly', ()=>{
  it('renders inputs before user login', ()=>{
    const store = createMockStore()
    store.getState().user = {}

    render(
      <Provider store={store}>
        <PostForm />
      </Provider>
    )
    const paragraphElement = screen.getByRole('labeltext')
    const titleInputElement = screen.getByPlaceholderText('Title')
    const textareaElement = screen.getByPlaceholderText(/Write your post here./i)

    expect(titleInputElement).toBeInTheDocument()
    expect(textareaElement).toBeInTheDocument()
    expect(paragraphElement).toHaveTextContent(/Please login to write a post./i)
  })

  it('renders correctly after user login', ()=>{
    const store = createMockStore()

    render(
      <Provider store={store}>
        <PostForm />
      </Provider>
    )

    const paragraphElement = screen.getByRole('labeltext')
    const titleInputElement = screen.getByPlaceholderText('Title')
    const textareaElement = screen.getByPlaceholderText(/Write your post here./i)

    expect(titleInputElement).toBeInTheDocument()
    expect(textareaElement).toBeInTheDocument()
    expect(paragraphElement).toHaveTextContent(/Welcome Ana/i)
  })

  it('changes the input values after user typping', ()=>{
    const store = createMockStore()
    const testTitle = 'Title'
    const testContent = 'Lorem ipsum'

    render(
      <Provider store={store}>
        <PostForm />
      </Provider>
    )
    const titleInputElement = screen.getByPlaceholderText('Title')
    const textareaElement = screen.getByPlaceholderText(/Write your post here./i)
    
    act(()=>{
      userEvent.type(titleInputElement, testTitle)
      userEvent.type(textareaElement, testContent)
    })

    expect(titleInputElement.value).toEqual(testTitle)
    expect(textareaElement.value).toEqual(testContent)
  })

  it('sends the right info when post is submited', ()=>{
    const store = createMockStore()
    const handleSubmit = jest.fn()
    const testTitle = 'Title'
    const testContent = 'Lorem ipsum'

    render(
      <Provider store={store}>
        <PostForm />
      </Provider>
    )

    const formElement = screen.getByRole('postForm')
    formElement.onsubmit = handleSubmit
    const titleInputElement = screen.getByPlaceholderText('Title')
    const textareaElement = screen.getByPlaceholderText(/Write your post here./i)
    const submitButton = screen.getByRole('button', {name: /Post it/i})
    
    act(()=>{
      userEvent.type(titleInputElement, testTitle)
      userEvent.type(textareaElement, testContent)
      userEvent.click(submitButton)
    })

    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })
})