import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget'

export const NavBar = () => {

  return (
 
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">

            <FontAwesomeIcon 
              icon={faHouse}
              className="ms-1"
              size="lg"
            />
            <span className="ms-2 h5">Toys Collectors</span>
          </a>

          <div className={"navbar-collapse offcanvas-collapse"}>
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <a href="/productos" className="nav-link">
                  Productos
                </a>
              </li>
            </ul>
            <CartWidget/>
          </div>
        </div>
      </nav>
    </header>

  )
}
