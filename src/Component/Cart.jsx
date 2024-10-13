import React, { useState } from 'react'
import "../Styles/Cart.css"
import Ordercart from './Ordercart';
import { RxCrossCircled } from "react-icons/rx";



function Cart({conditionchange,addCartData,AfterDelet}) {


  const totalPrice = addCartData.reduce((acc, dataa) => acc + dataa.price, 0);

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
            return<Ordercart key={cartdata.id} cartdata={cartdata} AfterDelet={AfterDelet}/>
        })

       )}

        </div>

        <div className="totalprice">
          Item:{addCartData.length}<br />
          Total Amount: {totalPrice} <br />
          <hr />
          <button className="Checkout">Checkout</button>
        </div>
      </div>
    </>
  );
}


export default Cart