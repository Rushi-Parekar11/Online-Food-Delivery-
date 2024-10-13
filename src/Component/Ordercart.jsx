import React from 'react'
import "../Styles/Ordercart.css"
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

function Ordercart({cartdata,AfterDelet}) {



  return (
    <>
    <div className="ordercartmain">
      <div className="imgdiv">
        <img src={cartdata.img} alt={cartdata.name} height="64px" width="64px" />
      </div>
      <div className="ordername">
        {cartdata.name.slice(0, 30)}... <br /><br />
        <strong style={{color: 'orange', marginTop: '10px'}}>₹{cartdata.price}</strong>
      </div>
      <div className="iconadd">
        <div className="iconfordelet" >
          <RxCross2 onClick={()=>AfterDelet(cartdata.id)} style={{height:'18px',width:'18px'}}/>
        </div>
        <div className="iconfornumber" style={{paddingTop:'7px'}}>
          <FaPlus style={{height: '14px'}} />
          <span style={{fontSize: 'large', padding: '0px 8px', borderRadius: '5px', margin: '0px 9px',color:'white',backgroundColor:'#22c55e'}}>1</span>
          <FaMinus style={{height: '14px'}} />
        </div>
      </div>
    </div>
    </>
  );
}



export default Ordercart
