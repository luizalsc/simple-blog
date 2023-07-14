import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deletePost } from '../store/actions'

const PostList = () =>{
  const postList = useSelector((state) => state.posts)
  const dispatch = useDispatch()
 
  if(postList.length === 0) {
    return (<p>No posts yet...</p>)
  }else{
    return(
      <div>
        <ul>
          {postList.map((post, index) => (
            <li key={`${post.title}-${index}`}>
              <h3>{post.title}</h3>
              <p>Posted by {post.author}</p>
              <p>{post.content}</p>
              <button onClick={() => {dispatch(deletePost(post))}} value={index}>Delete this post</button>
            </li>))
          }       
        </ul>
      </div>
    )
  }
  
}
export {PostList}