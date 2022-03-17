import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/admin/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/admin/products">
                Product
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Sidebar