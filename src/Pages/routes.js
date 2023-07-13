import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from './login'

function AppRoutes (){
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={LoginPage}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export { AppRoutes }