import React, { useState } from 'react'
 import "../Styles/Foodcard.css"

function Foodcard({dataele,AddDataFunction}) {

  
  return (

<>
<div>
     <div className="card" style={{ width: '18rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', borderRadius: '10px', overflow: 'hidden', margin: '20px auto' }}>
  <img src={dataele.img} className="card-img-top" alt="..." style={{ width: '90%', height: '200px', objectFit: 'cover', marginLeft: '15px', marginTop: '15px', borderRadius: '4px' }}/>
  <div className="card-body" style={{ padding: '15px' }}>
    {/* Title and Price Section */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h5 className="card-title" style={{ color: '#007bff', fontWeight: 'bold' ,width:'200px',fontSize:'14px'}}>{dataele.name}</h5>
      <div className='pricing' style={{fontSize:'small'}}>₹{dataele.price}</div>
    </div>
    
    <p className="card-text" style={{ fontSize: '14px', color: '#333',fontWeight:'250' }}>
      {dataele.desc.slice(0,50)}...
    </p>
    
    {/* Button and Rating Section */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <button  className='buttonadd' style={{ padding: '2px 4px',  borderRadius: '5px', cursor: 'pointer' }} onClick={()=>AddDataFunction(dataele)}>  Add Cart </button>
      
      {/* Rating Section */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ color: '#FFD700', fontSize: '18px', marginRight: '5px' }}>★</div>
        <div style={{ fontSize: '14px', color: '#333' }}>{dataele.rating}</div>
      </div>
    </div>
  </div>
</div>


</div>
</>

  )
}

export default Foodcard
