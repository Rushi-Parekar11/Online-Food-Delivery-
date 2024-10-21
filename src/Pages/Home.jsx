import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../Component/Navbar';
import Category from '../Component/Category';
import Fooditem from '../Component/Fooditem';
import FoodData from "../Data/FoodData.js";
import HeroSection from '../Component/HeroSection.jsx';
import { FaCartShopping } from "react-icons/fa6";
import "../Styles/Home.css";
import Cart from '../Component/Cart.jsx';
import { toast } from 'react-toastify';  // toastify import

function Home() {
  const [conditions, setConditions] = useState(true);
  const [sortData, setSortData] = useState(FoodData);
  const [addCartData, setAddCartData] = useState([]);
  const [mood, setMood] = useState(true);

  // Function to toggle the condition for cart visibility
  const conditionchange = () => {
    setConditions(!conditions);
  };

  // Function for filtering items based on selected category
  const GetCategory = (selected) => {
    if (selected === "All") {
      setSortData(FoodData);
      return;
    }
    const filtered = FoodData.filter((ele) => ele.category === selected);
    setSortData(filtered);
  };

  // Function to add items to the cart
  const AddDataFunction = (cartInfo) => {
    let isPresent = false;
    addCartData.forEach((product) => {
      if (cartInfo.id === product.id) {
        isPresent = true;
        toast.error("Item already in Cart!");
      }
    });
    if (isPresent) return;
    if (addCartData.length < 5) {
      const updatedCartData = [...addCartData, cartInfo];
      setAddCartData(updatedCartData);
      toast.success("Item added to cart 😋");
    } else {
      toast.error("Cart is Full!");
    }
  };

  // Function to remove items from the cart
  const AfterDelet = (IdForDelete) => {
    toast.success("Item removed from Cart!");
    const updatedData = addCartData.filter((allitem) => allitem.id !== IdForDelete);
    setAddCartData(updatedData);
    if (updatedData.length > 0) {
      localStorage.setItem("cartData", JSON.stringify(updatedData));
    } else {
      localStorage.removeItem("cartData");
    }
  };

  // Toggle dark mode
  const moodFunct = () => {
    const newMood = !mood;
    setMood(newMood);
    localStorage.setItem("moodData", JSON.stringify(newMood));
  };

  // Scroll function
  const sectionRef = useRef(null);
  const handalscroll = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Load cart data from localStorage on mount
  useEffect(() => {
    const storedCartData = JSON.parse(localStorage.getItem("cartData"));
    if (storedCartData) {
      setAddCartData(storedCartData);
    }
    const getMoodData = JSON.parse(localStorage.getItem("moodData"));
    if (getMoodData !== null) {
      setMood(getMoodData);
    }
  }, []);

  // Update localStorage whenever addCartData changes
  useEffect(() => {
    if (addCartData.length > 0) {
      localStorage.setItem("cartData", JSON.stringify(addCartData));
    }
  }, [addCartData]);

  return (
    <>
      <div id='sticky'>
        <Navbar moodFunct={moodFunct} mood={mood} addCartData={addCartData} conditions={conditions} conditionchange={conditionchange} />
      </div>
      <HeroSection mood={mood} handalscroll={handalscroll} />
      <Category GetCategory={GetCategory} mood={mood} />
      <div ref={sectionRef}>
        <Fooditem FoodData={sortData} AddDataFunction={AddDataFunction} mood={mood} />
      </div>

      {addCartData.length > 0 && (conditions ? <div className="arrlenght">{addCartData.length}</div> : '')}
      <span className="conditional">
        {conditions ? (
          <div className="carticon">
            <FaCartShopping id='idcarticon' onClick={conditionchange} />
          </div>
        ) : (
          <Cart addCartData={addCartData} conditionchange={conditionchange} AfterDelet={AfterDelet} />
        )}
      </span>
    </>
  );
}

export default Home;
