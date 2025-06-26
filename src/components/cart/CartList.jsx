// src/components/CartList.jsx

import { useSelector } from 'react-redux';
import { selectCart } from '../../features/cartSlice.js';
import { CartItem } from './CartItem';

export function CartList() {
  const cart = useSelector(selectCart);

  return (
    <ul id="cart-items">
      {Object.keys(cart).map(name => {
        const item = cart[name];
        return item.quantity > 0 ? (
          <CartItem key={name} name={name} item={item} />
        ) : null;
      })}
    </ul>
  );
}
