import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Home2() {
  return (
    <div>Home2 <br />
    <div style={{display:"flex",gap:30}}>
        <Link to="/home2">Home</Link>
        <Link to='/home2/about2'>About</Link>
        <Link to='/home2/contact2'>Contact</Link>
        </div>
        <Outlet></Outlet>
    </div>
  )
}
