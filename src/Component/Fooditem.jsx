import React, { useState } from 'react'
import Foodcard from './Foodcard'
import "../Styles/Fooditem.css"

function Fooditem({FoodData,AddDataFunction}) {

  return (
    <>


    <div className='allinone'>
       {FoodData.map((dataele)=>{
        return<Foodcard key={dataele.id} dataele={dataele} AddDataFunction={AddDataFunction}/>
       })}
    </div>
        </>
  )
}

export default Fooditem
