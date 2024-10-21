import React, { useEffect } from 'react';
import "../Styles/Profile.css";
import { useAuth0 } from "@auth0/auth0-react";


function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();


  return (
    <>
      {isAuthenticated ? 
      <div className="mainprofile">
      <div className="jstmid">



      <div className="infocard">
       <div className="imgcon">
       <div className="circleImg">
       {user.picture ? (<img src={user.picture} alt={user.name} />):(<div style={{width: "100px", height: "100px", borderRadius: "50%", backgroundColor: "red"}}></div>)}
       </div>
        </div>

        <span className='username'><h4 style={{overflow:'hidden'}}>{user.name}</h4></span>


      </div>
    <div>
        <p style={{marginTop:'10px'}}><strong>Gmail:</strong>{user.email}</p>
        
      </div>
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
      
      
      
      
      
      
      </div>
      </div>
      :<div>nodata</div>}
    </>
  );
}

export default Profile;
