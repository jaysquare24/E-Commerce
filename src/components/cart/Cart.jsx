import React,{useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  { selectCart, clearCart } from '../../features/cartSlice.js';
import { selectCurrencyFilter } from '../../features/currencyFilterSlice.js';
import { CartList } from './CartList.jsx';

import {
  calculateTotal,
  getCurrencySymbol
} from '../../features/utilities.js';

export const Cart = ({onCloseCart, cartItemsLength}) => {
  const currencyFilter= useSelector(selectCurrencyFilter);
  const cart = useSelector (selectCart);
  const dispatch = useDispatch();

  const onClearCartHandler = () => {
    dispatch(clearCart());
    onCloseCart();
  };

  const total = calculateTotal(cart, currencyFilter);

  return (
    <div id="cart-modal">
      <button className='close-cart-button' onClick = {() => onCloseCart()}>
        <img
          className='close-cart-icon'
          alt='close-cart-icon'
          src='/resources/icons8-close-window-32.png'
        />
      </button>

      {cartItemsLength > 0 ?
       <CartList/>
       : <p>YOUR CART IS EMPTY, PLEASE ADD SOME ITEMS!</p>
      } 

      <h3 className="total">
        Total{' '}
        <span className="total-value">
          {getCurrencySymbol(currencyFilter)}{total} {currencyFilter}
        </span>
      </h3>

      <div className='cart-buttons-container'>
        {Object.keys(cart).length > 0 &&(
          <button
            className='clear-cart-button'
            onClick={() => onClearCartHandler()}
          >
            Clear Cart
          </button>
        )}

        <button
          className='continue-shopping-button'
          onClick={() => onCloseCart()}
        >
          Continue Shopping
        </button>

        <button
          className='checkout-button'
          onClick={() => alert("Sorry! Feature not added yet.")}
        >
          Checkout
        </button>
      </div>
    </div>
  ); 
};
