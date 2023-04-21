import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="py-3 underline decoration-1 text-violet-700 text-xl flex items-center justify-center mb-10">
        <ul className="flex">
            <li><Link className="mr-6 hover:text-white" to="/" >Home</Link></li>
            <li><Link className="mr-6 hover:text-white" to="/auth">Login</Link></li>
            <li><Link className="mr-6 hover:text-white" to="/auth/register">Register</Link></li>
            <li><Link className="mr-6 hover:text-white" to="/profile">Profile</Link></li>

        </ul>
    </nav>
  )
}
