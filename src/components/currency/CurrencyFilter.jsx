import React from 'react';
import { currenciesData } from '../../features/data.js';
import { CurrencyButton } from './CurrencyButton';

export const CurrencyFilter = ({setMenuOpen}) => {
  return (
    <div id="currency-filters-container">
      <h3>Choose a currency</h3>
      {currenciesData.map(currency => (
        <CurrencyButton key={currency} currency={currency} setMenuOpen={setMenuOpen} />
      ))}
    </div>
  );
};
