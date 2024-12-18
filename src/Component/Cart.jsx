import React, { useState } from 'react'
import "../Styles/Cart.css"
import Ordercart from './Ordercart';
import { useAuth0 } from "@auth0/auth0-react";
import { RxCrossCircled } from "react-icons/rx";




function Cart({conditionchange,addCartData,AfterDelet}) {
  const { user, isAuthenticated, isLoading } = useAuth0();
const { loginWithRedirect } = useAuth0();

  const itemCount=(getidPrice)=>{
    settotalP((prevTotal) => prevTotal + getidPrice);
  }
  const itemCountMinus=(getidPrice)=>{
    settotalP((prevTotal) => prevTotal - getidPrice);
  }

  const totalPrice = addCartData.reduce((acc, dataa) => acc + dataa.price, 0);
  const[totalP,settotalP]=useState(0)
  return (
    <>
      <div id="cartbox" className="cartmainbox">
        <div className="cartmain">
          <h4 className="cartnm">My Order</h4>
          <div className="noicon">
            <RxCrossCircled className="noicon1" onClick={conditionchange} />
          </div>
        </div>

        <div className="orderitem">
       {addCartData.length===0 ? ( <h2 style={{ overflow: "hidden" }}>Cart is Empty!</h2> ):(
        addCartData.map((cartdata)=>{
            return<Ordercart key={cartdata.id} cartdata={cartdata} AfterDelet={AfterDelet} itemCount={itemCount} itemCountMinus={itemCountMinus}/>
        })

       )}

        </div>

        <div className="totalprice">
          Item:{addCartData.length}<br />
          Total Amount: {totalPrice+totalP} ₹<br />
          <hr />
        {isAuthenticated ?  <button className="Checkout">Checkout</button>:<button type="button" id='loginbtncart' className="btn btn-primary" onClick={() => loginWithRedirect()}>Login</button>} 
        </div>
      </div>
    </>
  );
}


export default Cart