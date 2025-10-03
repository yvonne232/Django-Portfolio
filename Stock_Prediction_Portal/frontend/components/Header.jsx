import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <nav className='navbar container pt-3 pb-3 align-items-lg-start'>
      <a className='navbar-brand text-light' href=''>Stock Prediction Portal</a>
      <div>
        
        {/* <a className='btn btn-outline-info' href=''>Login</a> */}
        <Button text="Login" className="btn btn-outline-info" />
        &nbsp;
        {/* <a className='btn btn-info' href=''>Register</a> */}
        <Button text="Register" className="btn btn-info" />
      </div>
    </nav>
  )
}

export default Header
