import { useState } from 'react'

import './index.css'
import "bootstrap/dist/css/bootstrap.css"

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Create from './components/pages/Create'

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
          <div className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to={"/"} className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to={"/create"} className='nav-link'>Create</Link>
            </li>
          </div>
        </nav>

        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<Create/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
