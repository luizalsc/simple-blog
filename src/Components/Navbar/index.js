import { useSelector } from "react-redux"

const Navbar = ()=>{

  const user = useSelector((state)=> state.user)

  const welcomeText = user.status === true ? `Bem-vindo(a) ${user.user.username}`: 'Faça Login'
  
    return(
      <div>
        <h2>My Blog</h2>
        <div>
          <p role='paragraph'>{welcomeText}</p>
        </div>
      </div>)
}

export { Navbar }