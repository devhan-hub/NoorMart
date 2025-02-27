import React from 'react'
import { Routes , Route  , BrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Catagery'
import About from '../pages/About'
import Contact from '../pages/Contact'

const Router = () => {
  return (
 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/category' element={<Category/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  )
}

export default Router
