import React from 'react'
import { NavLink } from 'react-router-dom';
type Props = {}

const Navbar = (props: Props) => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/product">Product </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/about">About </NavLink>
        </li>
    </ul>
  )
}

export default Navbar