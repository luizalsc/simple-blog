import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login, loginStatus } from '../../store/actions'

function LoginForm (){

  const dispatch = useDispatch()

  const [profile, setProfile] = useState({})

  const handleInputChange = (event)=>{
    const value = event.target.value
    setProfile({...profile, [event.target.name]: value})
  }
  const handleSubmit = (event)=>{
    event.preventDefault()
    dispatch(loginStatus(true))
    dispatch(login(profile))
    
  }

  return(
    <main>
        <form value={profile} role='loginform' onSubmit={handleSubmit}>
          <label htmlFor='username'>User name</label>
          <input
            type='text'
            placeholder='User'
            name='username'
            onChange={handleInputChange}></input>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            placeholder='****'
            name='password'
            onChange={handleInputChange}></input>
          <button type='submit'>Login</button>
        </form>
      </main>
  )
}

export {LoginForm}