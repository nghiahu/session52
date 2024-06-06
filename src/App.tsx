import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Bt1/Home'
import About from './components/Bt1/About'
import Contact from './components/Bt1/Contact'
import Home2 from './components/Bt2/Home2'
import About2 from './components/Bt2/About2'
import Contact2 from './components/Bt2/Contact2'
import Index from './components/Bt3/Index'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>

        <Route path='/home2' element={<Home2/>}>
          <Route path='/home2/about2' element={<About2/>}></Route>
          <Route path='/home2/contact2' element={<Contact2/>}></Route>
      </Route>

      <Route path='/index' element={<Index/>}></Route>
      </Routes>
    </div>
  )
}
