import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar bg-${props.mode} navbar-expand-lg navbar-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand">{props.title}</a>
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/'>Signup</Link>
          </li>
          <li className="nav-item">
              <Link className='nav-link active' aria-current='page' to='/loginform'>Login</Link>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-danger" type="submit">Search</button>
        </form> */}
        <div className="form-check form-switch">

        </div>
      </div>

    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string

}

Navbar.defaultProps = {
  title: 'set title here',
  aboutText: 'about text here'
}