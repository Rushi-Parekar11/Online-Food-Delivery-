import React, { useState } from 'react'
import "../Styles/Category.css"

function Category({GetCategory,mood}) {

    const [coloron, setcoloron] = useState(1);



  return (
    <>
    <div className="cat-main" style={mood ? {backgroundColor:'white'}:{backgroundColor:'#18181b'}}>
    <h3 className='cat-head' style={mood ? {backgroundColor:'white'}:{backgroundColor:'#18181b'}}>Find The Best Food</h3>

    <div className="btngroup" style={mood ? {backgroundColor:'white'}:{backgroundColor:'#18181b'}} >
        <span className='spancat'  style={coloron===1 ?{backgroundColor: '#ef4440',color:'white'}:{} } onClick={()=>{setcoloron(1);GetCategory("All")}} >All</span>
        <span className='spancat'  style={coloron===2 ?{backgroundColor: '#ef4440',color:'white'}:{} } onClick={()=>{setcoloron(2);GetCategory("Lunch")}}  >Lunch</span>
        <span className='spancat'  style={coloron===3 ?{backgroundColor: '#ef4440',color:'white'}:{} } onClick={()=>{setcoloron(3);GetCategory("Breakfast")}} >Breakfast</span>
        <span className='spancat'  style={coloron===4 ?{backgroundColor: '#ef4440',color:'white'}:{} }  onClick={()=>{setcoloron(4);GetCategory("Dinner")}} >Dinner</span>
        <span className='spancat'  style={coloron===5 ?{backgroundColor: '#ef4440',color:'white'}:{} }  onClick={()=>{setcoloron(5);GetCategory("Snacks")}} >Snacks</span>
    </div>

    </div>
    </>
  )
}

export default Category
