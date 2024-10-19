import React, { useRef, useState } from 'react';
import Navbar from '../Component/Navbar';
import Category from '../Component/Category';
import Fooditem from '../Component/Fooditem';
import FoodData from "../Data/FoodData.js"
import HeroSection from '../Component/HeroSection.jsx';
import { FaCartShopping } from "react-icons/fa6";
import "../Styles/Home.css"
import Cart from '../Component/Cart.jsx';
import {toast } from 'react-toastify';                  ///toastify import


function Home() {
const[conditions,setconditions]=useState(true)
const conditionchange=()=>{setconditions(!conditions);}
const[sortdata,setsortdata]=useState(FoodData)


//For The Condition render of category
  const GetCategory=(selected)=>{
    if(selected==="All"){setsortdata(FoodData); return}
    const just=FoodData.filter((ele)=>{
      return ele.category===selected
    })
    setsortdata(just)
  }


   const[addCartData,setaddCartData]=useState([]);


   // function for cart add in cart array,item alrady present,cart array full.
  const AddDataFunction = (cartInfo) => {
    let isPresent=false;
    addCartData.forEach((product)=>{
      if(cartInfo.id===product.id)
      {  isPresent=true; 
        toast.error("Item already in Cart!")
       }
    });
    if(isPresent)return;
    if (addCartData.length < 5) {
      setaddCartData([...addCartData, cartInfo]);
      toast.success("Item added to cart !")

    } else {
      toast.error("Cart is Full !")
    }
  };


  //function for delete cart in 
    const AfterDelet=(IdForDelete)=>{
      const updatedData = addCartData.filter((allitem) => allitem.id !== IdForDelete);
      setaddCartData(updatedData)
    }

    ///for dark mood
    const [mood,setmood]=useState(true);
    const moodFunct=()=>{
      setmood(!mood);
    }

    ///for scroll
    const sectionRef=useRef(null);
    const handalscroll=()=>{
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  
  return (
    <>
      <div id='sticky'><Navbar moodFunct={moodFunct} mood={mood}/> </div> 
      <HeroSection mood={mood} handalscroll={handalscroll}/>
      <Category GetCategory={GetCategory} mood={mood}/>
      <div ref={sectionRef}><Fooditem FoodData={sortdata} AddDataFunction={AddDataFunction} mood={mood}/></div>


    
      {addCartData.length>0 && (conditions ?<div  className="arrlenght">{addCartData.length}</div>:'') }
      <span className="conditional" >
      {conditions ? <div className="carticon"><FaCartShopping id='idcarticon' onClick={conditionchange}/></div>:
      <Cart addCartData={addCartData} conditionchange={conditionchange} AfterDelet={AfterDelet}/>}
        </span>

      


      
    </>
  )
}

export default Home
