import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/Navbar'

const NavBar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">
          <Link to="/">MixMaster</Link>
        </span>
        <div className="nav-links">
          <NavLink to="" className="nav-link">
            Home
          </NavLink>
          <NavLink to="about" className="nav-link">
            about
          </NavLink>
          <NavLink to="newsletter" className="nav-link">
            newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}

export default NavBar
