import { useRef, useState, useEffect } from 'react';
import { currenciesData } from '../../../../features/data';
import { CurrencyButton } from './CurrencyButton';


export const CurrencyFilter = ({setMenuOpen}) => {
  const [openCurrency, setOpenCurrency] = useState(false);
  const [currencySelected, setCurrencySelected] = useState("USD");
  const dropdownRef = useRef(null);

  useEffect(()=>{
    const handleClickOutside = (event) => {
      const target = event.target;

      if(openCurrency && dropdownRef.current && !dropdownRef.current.contains(target)){
        setOpenCurrency(false);
      }
    };
    
    if(openCurrency){
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);

  },[openCurrency]);

  return (
    <div ref={dropdownRef} id="currency-filters-container">
      <button 
        id="currency-filter-button"
        onClick={()=>setOpenCurrency(prev => !prev)}
      >Currency : {currencySelected}  <img src="/resources/icons8-sort-down-16.png" className="dropdown-arrow" alt=" sort-down-arrow" aria-hidden="true"/> </button>
      {openCurrency &&(
      <div className='currency-filters-dropdown'>
        {currenciesData.map(currency => (
          <CurrencyButton key={currency} currency={currency} setMenuOpen={setMenuOpen} setOpenCurrency={setOpenCurrency} setCurrencySelected={setCurrencySelected}/>
        ))}
      </div>
      )}
    </div>
  );
};
