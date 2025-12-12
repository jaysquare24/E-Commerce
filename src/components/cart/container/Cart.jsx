import { useSelector, useDispatch } from 'react-redux';
import { selectCart, clearCart } from '../../../features/cartSlice.js';
import { selectCurrencyFilter } from '../../../features/currencyFilterSlice.js';
import { CartList } from '../presentaionals/CartList.jsx';
import { OrderSummary } from '../presentaionals/OrderSummary.jsx';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const currencyFilter = useSelector(selectCurrencyFilter);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const cartItemsLength = Object.keys(cart).length; 

  const onClearCartHandler = () => {
    dispatch(clearCart());

  };

  return (
    <div id="cart">
      <h3 className='cart-header'>Your Cart</h3>
      {cartItemsLength > 0 ? (
        <div className='orders'>
          <CartList />
          <OrderSummary cart={cart} currencyFilter={currencyFilter} />
        </div>
      ) : (
        <p className='cart-fallback'>YOUR CART IS EMPTY, PLEASE ADD SOME ITEMS!</p>
      )}

      <div className='cart-buttons-container'>
        <button
          className='go-back-button'
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>

        <button
          className='continue-shopping-button'
          onClick={() => navigate('/shop')}
        >
          Continue Shopping
        </button>

        {cartItemsLength > 0 && (
          <button
            className='clear-cart-button'
            onClick={() => {
              onClearCartHandler()
              navigate('/shop')
            }}
          >
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
};
