import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {

  return (
 
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">

            <FontAwesomeIcon 
              icon={faHouse}
              className="ms-1"
              size="lg"
            />
            <span className="ms-2 h5">Toys Collectors</span>
          </Link>

          <div className={"navbar-collapse offcanvas-collapse"}>
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <Link to="/productos" className="nav-link">
                  Productos
                </Link>
              </li>
            </ul>
            <CartWidget/>
          </div>
        </div>
      </nav>
    </header>

  )
}
