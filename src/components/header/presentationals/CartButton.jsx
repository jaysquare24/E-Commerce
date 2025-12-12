import React,{ useState, useEffect } from "react";
import { useSelector}  from "react-redux";
import { selectCart } from "../../../features/cartSlice";
import { NavLink } from "react-router-dom";


export const CartButton = () =>{
  const cart = useSelector(selectCart);
  const [cartItemsLength, setCartItemsLength ] = useState(0);
  
  
  useEffect(() =>{
    const numberOfCartItems = Object.keys(cart).length;
    setCartItemsLength(numberOfCartItems);
  }, [cart]);


  return (
    
      <NavLink to={'/cart'} id="cart-button">
        <img
          className={`cart-icon${cartItemsLength > 0 ? " cart-icon--active" : ""}`}
          alt="cart-icon"
          src="/resources/Frame.svg"
        />
        {cartItemsLength > 0 && (
          <span className="cart-items-length">{cartItemsLength}</span> 
        )}
      </NavLink>
       
    
  )

}