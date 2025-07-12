import React,{ useState, useEffect } from "react";
import { useSelector}  from "react-redux";
import { selectCart } from "../../features/cartSlice";
import { Cart } from "./Cart";
import { Modal } from "../Modal";


export const CartButton = () =>{
  const cart = useSelector(selectCart);
  const [cartItemsLength, setCartItemsLength ] = useState(0);
  const [ showCart, setShowCart ] = useState(false);
  
  useEffect(() =>{
    const numberOfCartItems = Object.keys(cart).length;
    setCartItemsLength(numberOfCartItems);
  }, [cart]);

  const onShowCart = () => {
    setShowCart(true)
  };

  const onCloseCart = () => {
    setShowCart(false)
  }

  return (
    <div>
      <button id="cart-button"
        onClick = {() => onShowCart()}
      >
        <img
          className={`cart-icon${cartItemsLength > 0 ? " cart-icon--active" : ""}`}
          alt="cart-icon"
          src="/resources/icons8-shopping-bag-32.png"
        />
        {cartItemsLength > 0 && (
          <span className="cart-items-length">{cartItemsLength}</span> 
        )}
      </button>
      {showCart && (
        <Modal open = {onShowCart} id="cart-modal">
          <Cart onCloseCart = { onCloseCart} cartItemsLength = {cartItemsLength}  />
        </Modal>
      )}
    </div>
  )

}