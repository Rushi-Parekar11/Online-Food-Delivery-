import React from 'react'
import img from "../assets/img.png"
import "../Styles/HeroSection.css"
import { FaVanShuttle } from "react-icons/fa6";
import { IoChevronForwardOutline } from "react-icons/io5";
import { FaShield } from "react-icons/fa6";

function HeroSection({mood,handalscroll}) {
  return (
    <>
        <div className="heroSection" style={mood ? {backgroundColor:' #f4f4f4',color:'black'}:{backgroundColor:'#18181b',color:'white'}}>

        <div className="part">
          <div className="names">
            <h4 style={{overflow:'hidden'}}>Easy way to make an order</h4>
            <h1 style={{ overflow: 'hidden' }}><span style={{ color: '#dc2626' }}>Hungry?</span> We’ve got</h1>       
                 <h1 style={{overflow:"hidden"}}> your back.</h1>
            <div style={{display:'flex',flexDirection:'column',gap:'-100px'}}>
            <p>QuickBite is your go-to app for lightning-fast</p>
            <p style={{marginTop:'-10px'}}> food deliveries from your favorite local restaurants.</p>
            </div>
            <button type="button" className="btn btn-danger" onClick={handalscroll}>Check Menu <IoChevronForwardOutline /></button>


<div style={{fontSize:'20px',fontWeight:'700px',marginTop:'100px'}}>
  <span> <FaVanShuttle style={{color:'red'}}/> No shipping charge</span>
  <span style={{marginLeft:'70px'}}> <FaShield style={{color:'red'}}/> 100% secure checkout</span>
</div>
          </div>
        </div>




        <div className="part">
            <img src={img} alt="" className='imgdiv' style={{height:'390px',width:'400px'}}/>
        </div>
            
        </div>
    </>
  )
}

export default HeroSection
