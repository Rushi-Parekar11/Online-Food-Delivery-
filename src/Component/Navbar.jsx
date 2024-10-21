import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { LuMoon } from "react-icons/lu";
import { TiWeatherSunny } from "react-icons/ti";
import { useAuth0 } from "@auth0/auth0-react";
import "../Styles/Navbar.css"


function Navbar({ moodFunct, mood, addCartData, conditions, conditionchange,profileFUN}) {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (<>
    <nav style={mood ? { backgroundColor: 'white', color: 'black' } : { backgroundColor: '#18181b', color: 'white' }}>
      <div className='nav-first'>
        {/* <div className='daydate'>{new Date().toUTCString().slice(0,16)}</div> */}
        <div className='daydate' style={mood ? { color: 'black' } : { color: 'white' }}>QuickBite</div>
        <div className='appname'> <strong style={{ color: '#dc2626' }}>Fast</strong> food, <strong style={{ color: '#dc2626' }}>Faster</strong> delivery.</div>


      </div>

      <div className='nav-second'>
        {/* <input  className='inpfild' type="text" placeholder='Search here...'/> */}
        {addCartData.length > 0 && (conditions ? <div className="arrlenghtNAV">{addCartData.length}</div> : '')}
        <FaCartShopping id='iconnav' onClick={conditionchange} />
        <span onClick={moodFunct}>{mood ? <LuMoon id='iconnav' /> : <TiWeatherSunny id='iconnav' />}</span>

        {/* <CgProfile id='iconnav' /> */}

        {isAuthenticated ? <CgProfile id='iconnav' onClick={profileFUN}  /> : <button type="button" id='loginbtn' className="btn btn-primary" onClick={() => loginWithRedirect()}>Login</button>}

      </div>
    </nav>



  </>
  )

}

export default Navbar
