import React from 'react'
import "../Styles/Navbar.css"


function Navbar() {
  return (
    <nav>
      <div className='nav-first'>
      <div className='daydate'>{new Date().toUTCString().slice(0,16)}</div>
      <div className='appname'>Flavoro Foods</div>
    
      
      </div>

      <div className='nav-second'>
        <input  className='inpfild' type="text" placeholder='Search here...'/>
      </div>
    </nav>
  )
}

export default Navbar
