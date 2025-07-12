export function calculatePrice(price, currency) {
  switch (currency) {
    case 'NGN':
      return price * 1550;
    case 'EUR':
      return price * 0.86;
    case 'CAD':
      return price * 1.33;
    default:
      return price;
  }
}

export function calculateTotal(cart, currency) {
  let totalUSD = 0;
  Object.keys(cart).forEach((itemName) => {
    totalUSD += cart[itemName].price * cart[itemName].quantity;
  });

  const total = calculatePrice(totalUSD, currency);
  return Number(total).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function getCurrencySymbol(currencyFilter) {
  switch (currencyFilter) {
    case 'USD':
      return '$';
    case 'NGN':
      return '₦';
    case 'EUR':
      return '€';
    case 'CAD':
      return '$';
    default:
      return '';
  }
}
