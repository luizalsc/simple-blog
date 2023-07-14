import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postSubmtionContent } from '../../store/actions'

const PostForm = ({content, title})=>{
  const dispatch = useDispatch()
  const user = useSelector((state)=> state.user)

  const [post, setPost] = useState({})

  const handleChange = (event)=>{
    const value = event.target.value
    setPost({...post,[event.target.name]: value})
  } 

  const handleSubmit = (event)=>{
    event.preventDefault()
    dispatch(postSubmtionContent({...post, author: user.profile.username}))
  }

  const labelText = user.status === true ? `Welcome ${user.profile.username}, please enter bellow your newest post!`: 'Please login to write a post.'

  return(
    <div>
      <form
        onSubmit={handleSubmit}
        role='postForm'>
        <h3>New Post</h3>
        <p role='labeltext'>{labelText}</p>
        <input
          type='text'
          value={title}
          name='title'
          placeholder='Title'
          onChange={handleChange}></input>
        <br/>
        <textarea cols='30' rows='10' name='content' value={content} onChange={handleChange} placeholder='Write your post here.'></textarea>
        <button type='submit'>Post it</button>
      </form>
    </div>
  )
}

export { PostForm }