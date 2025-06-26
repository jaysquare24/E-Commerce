// src/components/InventoryItem.jsx
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../features/cartSlice.js';
import { getCurrencySymbol, calculatePrice } from '../../features/utilities.js';
import { selectCurrencyFilter } from '../../features/currencyFilterSlice.js';

export function InventoryItem({ item }) {
  const dispatch = useDispatch();
  const currencyFilter = useSelector(selectCurrencyFilter);

  const { price, name, img } = item;
  const displayPrice = calculatePrice(price, currencyFilter);

  const onClickHandler = () => {
    dispatch(addItem(item));
  };

  return (
    <li className="item" key={name}>
      <img src={img} alt={`${name}`} />
      <h3>{name}</h3>
      <h3 className="price">
        {getCurrencySymbol(currencyFilter)}
        {Number(displayPrice).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}{' '}
        {currencyFilter}
      </h3>
      <button onClick={onClickHandler} className="add-to-cart-button">
        Add to Cart
      </button>
    </li>
  );
}
