import React, { useState } from 'react'
import Foodcard from './Foodcard'
import "../Styles/Fooditem.css"

function Fooditem({FoodData,AddDataFunction,mood}) {

  return (
    <>


    <div className='allinone' style={mood ? {backgroundColor:' #f4f4f4'}:{backgroundColor:'#18181b'}}>
       {FoodData.map((dataele)=>{
        return<Foodcard key={dataele.id} dataele={dataele} AddDataFunction={AddDataFunction}/>
       })}
    </div>
        </>
  )
}

export default Fooditem
