import React, { useState } from 'react'
import "../Styles/Category.css"

function Category({GetCategory}) {

    const [coloron, setcoloron] = useState(1);



  return (
    <>
    <div className="cat-main">
    <h3 className='cat-head'>Find The Best Food</h3>

    <div className="btngroup">
        <span className='spancat'  style={{backgroundColor:coloron===1 ? '#22c55e':''}} onClick={()=>{setcoloron(1);GetCategory("All")}} >All</span>
        <span className='spancat' style={{backgroundColor:coloron===2 ? '#22c55e':''}} onClick={()=>{setcoloron(2);GetCategory("Lunch")}}  >Lunch</span>
        <span className='spancat'  style={{backgroundColor:coloron===3 ? '#22c55e':''}} onClick={()=>{setcoloron(3);GetCategory("Breakfast")}} >Breakfast</span>
        <span className='spancat' style={{backgroundColor:coloron===4 ? '#22c55e':''}}  onClick={()=>{setcoloron(4);GetCategory("Dinner")}} >Dinner</span>
        <span className='spancat'  style={{backgroundColor:coloron===5 ? '#22c55e':''}}  onClick={()=>{setcoloron(5);GetCategory("Snacks")}} >Snacks</span>
    </div>

    </div>
    </>
  )
}

export default Category
