import { LoginForm } from "../Components/LoginForm"
import { PostForm } from "../Components/PostForm"
import { Navbar } from "../Components/Navbar"
import { PostList } from "./postList"

function LoginPage () {
  return (
    <>
      <Navbar />
      <LoginForm />
      <PostForm />
      <PostList />
    </>
  )
}

export {LoginPage}