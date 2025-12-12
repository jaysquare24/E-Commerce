import { useSelector, useDispatch } from 'react-redux';
import { selectCurrencyFilter, setCurrency } from '../../../../features/currencyFilterSlice.js';

export function CurrencyButton({ currency, setMenuOpen, setOpenCurrency, setCurrencySelected }) {
  const dispatch = useDispatch();
  const currencyFilter = useSelector(selectCurrencyFilter);

  const handleClick = () => {
    dispatch(setCurrency(currency));
  };

  return (
    <button
      className={`currency-button ${currencyFilter === currency? 'selected' : ''}`}
      onClick={()=>{
        handleClick();
        setMenuOpen(false);
        setOpenCurrency(false);
        setCurrencySelected(currency);

      }}
    >
      {currency}
    </button>
  );
}
