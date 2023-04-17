import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="py-3 text-violet-700 flex justify-between items-center">
        <ul className="flex">
            <li><Link className="mr-2 hover:text-white" to="/" >Home</Link></li>
            <li><Link className="mr-2 hover:text-white" to="/todo/create">Create Todo</Link></li>
            <li><Link className="mr-2 hover:text-white" to="/user/login">Login</Link></li>
            <li><Link className="mr-2 hover:text-white" to="/user/register">Register</Link></li>
            <li><Link className="mr-2 hover:text-white" to="/user/profile">Profile</Link></li>

        </ul>
    </nav>
  )
}
