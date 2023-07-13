import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postSubmtionContent } from '../../store/actions'

const PostForm = ({content})=>{
  const dispatch = useDispatch()
  const user = useSelector((state)=> state.user)
  console.log('postform',user)

  const [post, setPost] = useState({})

  const handleChange = (event)=>{
    const value = event.target.value
    setPost({[event.target.name]: value})
  } 

  const handleSubmit = (event)=>{
    event.preventDefault()
  
    dispatch(postSubmtionContent(post))
  }

  return(
    <div>
      <form>
        <h3>New Post</h3>
        <p>Welcome {user.username}, please enter bellow your newest post!</p>
        <textarea cols='30' rows='10' name='content' value={content} onChange={handleChange} placeholder='Write your post here.'></textarea>
        <button type='submit' onSubmit={handleSubmit}>Post it</button>
      </form>
    </div>
  )
}

export { PostForm }