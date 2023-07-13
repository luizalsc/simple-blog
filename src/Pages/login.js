import { LoginForm } from "../Components/LoginForm"
import { PostForm } from "../Components/PostForm"
import { Navbar } from "../Components/Navbar"

function LoginPage () {
  return (
    <>
      <Navbar />
      <LoginForm />
      <PostForm />
    </>
  )
}

export {LoginPage}