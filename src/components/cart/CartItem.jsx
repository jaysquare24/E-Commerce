// src/components/CartItem.jsx

import { useDispatch, useSelector } from 'react-redux';
import { getCurrencySymbol, calculatePrice } from '../../features/utilities.js';
import { changeItemQuantity, removeItem } from '../../features/cartSlice.js';
import { selectCurrencyFilter } from '../../features/currencyFilterSlice.js';

export function CartItem({ name, item }) {
  const dispatch = useDispatch();
  const currencyFilter = useSelector(selectCurrencyFilter);

  const itemTotal = calculatePrice(item.price * item.quantity, currencyFilter);

  const onAddQuantity = () => {
    dispatch(changeItemQuantity({ name, quantity: item.quantity + 1 }));
  };

  const onSubtractQuantity = () => {
    if (item.quantity > 0) {
      dispatch(changeItemQuantity({ name, quantity: item.quantity - 1 }));
    }
  };

  const onRemoveItem = () => {
    dispatch(removeItem({ name }));
  };

  return (
    <li className='cart-item'>
      <div className='item-1'>
        <img className='cart-item-image' alt='cart-item-image' src={item.img} />
        <div className='item-1-details'>
          <p>{name}</p>
          <p>
            Amount: {getCurrencySymbol(currencyFilter)}
            {Number(itemTotal).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
      </div>

      <div className='item-2'>
        <p>Quantity(s)</p>
        <div className='quantity-buttons-container'>
          <button className='minus-quantity-button' onClick={onSubtractQuantity}>
            -
          </button>
          <p className='item-quantity'>{item.quantity}</p>
          <button className='plus-quantity-button' onClick={onAddQuantity}>
            +
          </button>
        </div>
      </div>

      <button className='remove-item-button item-3' onClick={onRemoveItem}>
        <img
          className='remove-item-icon'
          alt='remove-item-icon'
          src='/resources/icons8-delete-32.png'
        />
      </button>
    </li>
  );
}
