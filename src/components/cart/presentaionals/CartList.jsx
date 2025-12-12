import { useSelector } from 'react-redux';
import { selectCart } from '../../../features/cartSlice.js';
import { CartItem } from './CartItem';

export function CartList() {
  const cart = useSelector(selectCart);

  return (
    <ul id="cart-items">
      {Object.keys(cart).map(id => {
        const item = cart[id];
        return item.quantity > 0 ? (
          <CartItem key={id} id={id} item={item} />
        ) : null;
      })}
    </ul>
  );
}
