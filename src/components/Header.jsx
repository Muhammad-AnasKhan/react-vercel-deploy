import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header">
          <h1>Header</h1>
          <ul>
            <Link to="/">Basic Tools</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </ul>

        </div>
      </div>
    </>

  )
}

export default Header