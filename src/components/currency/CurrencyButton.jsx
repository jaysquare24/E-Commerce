import { useSelector, useDispatch } from 'react-redux';
import { selectCurrencyFilter, setCurrency } from '../../features/currencyFilterSlice.js';

export function CurrencyButton({ currency, setMenuOpen }) {
  const dispatch = useDispatch();
  const currencyFilter = useSelector(selectCurrencyFilter);

  const isSelected = currencyFilter === currency;

  const handleClick = () => {
    dispatch(setCurrency(currency));
  };

  return (
    <button
      className={`currency-button ${isSelected ? 'selected' : ''}`}
      onClick={()=>{
        handleClick();
        setMenuOpen(false);
      }}
    >
      {currency}
    </button>
  );
}
