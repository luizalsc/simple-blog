const Post = ({username, content}) =>{
  return(
    <div>
      <h3>Posted by {username}</h3>
      <p>{content}</p>
    </div>
  )
}
export {Post}