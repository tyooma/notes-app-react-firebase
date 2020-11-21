import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { FirebaseContext } from '../context/firebase/firebaseContext'

import pin from '../img/pin.svg'

export const Navbar = () => {
  const { loading } = useContext(FirebaseContext)
  
  return loading
  ? null
  : (
    <nav className="navbar navbar-dark navbar-expand-lg background-animate">
      <div className="navbar-brand">
        <img
          src={pin}
          alt="logo"
          className="logo"
        />
        Notes App&nbsp;
      </div>

      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink  
            className="nav-link"
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
