import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Menu = (props: Props) => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/product">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin">Dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/product">Manager Product</NavLink>
        </li>
      </ul>
  )
}

export default Menu