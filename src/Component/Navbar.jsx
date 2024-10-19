import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { LuMoon } from "react-icons/lu";
import { TiWeatherSunny } from "react-icons/ti";
import "../Styles/Navbar.css"


function Navbar({moodFunct,mood}) {

  return (
    <nav style={mood ? {backgroundColor:'white',color:'black'}:{backgroundColor:'#18181b',color:'white'}}>
      <div className='nav-first'>
      {/* <div className='daydate'>{new Date().toUTCString().slice(0,16)}</div> */}
        <div className='daydate' style={mood ? {color:'black'}:{color:'white'}}>QuickBite</div>
      <div className='appname'> <strong style={{color:'#dc2626'}}>Fast</strong> food, <strong style={{color:'#dc2626'}}>Faster</strong> delivery.</div>
    
      
      </div>

      <div className='nav-second'>
        {/* <input  className='inpfild' type="text" placeholder='Search here...'/> */}
        <FaCartShopping id='iconnav' />
       <span onClick={moodFunct}>{mood ? <LuMoon id='iconnav'  />: <TiWeatherSunny id='iconnav'  />  }</span>
        <CgProfile id='iconnav' />
      </div>
    </nav>
  )
}

export default Navbar
