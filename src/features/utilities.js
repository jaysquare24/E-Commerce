import { inventoryData } from "./data";

export function currencyCoverter(price, currency) {
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

export function formatCurrency(amount) {
  return Number(amount).toLocaleString(undefined, { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  });
}

export function getSubTotal(cart, currency) {
  const totalUSD = Object.values(cart).reduce((sum, item) => {
    const price = item.discountPrice || item.price;
    return sum + price * item.quantity;
  }, 0);

  const total = currencyCoverter(totalUSD, currency);

  return formatCurrency(total);
}

export function getShippingFee(cart, currency) {
  const totalQty = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  const price = totalQty * 2; 
  
  return currencyCoverter(price, currency);
}


export function getGrandTotal(cart, currency) {
  const sum = Object.values(cart).reduce((sum, item) => {
    const price = item.discountPrice || item.price;
    return sum + price * item.quantity;
  }, 0);
 
  const total = currencyCoverter(sum + getShippingFee(cart), currency);

  return formatCurrency(total);
}



export const getDiscount = (cart) => {
  return Object.values(cart).reduce((sum, item) => {
    if (!item.discountPrice) return sum;

    const difference = item.price - item.discountPrice;
    return sum + difference * item.quantity;
  }, 0);
};


export const getDiscountPercentage = (cart) => {
  const sumPrice = Object.values(cart).reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  if (sumPrice === 0) return 0; // prevent NaN or Infinity

  const savedAmount = getDiscount(cart);

  return Math.round((savedAmount / sumPrice) * 100);
};




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


export const getStars = (rating) => {
  const rounded = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(rounded);
  const hasHalfStar = rounded % 1 !== 0;

  const stars = [];
  
  for (let i = 0; i < fullStars; i++) {
    stars.push('/resources/full-star.svg');
  }
  if (hasHalfStar) {
    stars.push('/resources/half-star.svg');
  }

  return stars;
};


export const isWhiteFamily = color =>["white", "beige", "ivory", "cream", "linen", "snow", "off-white"].includes(color);

export const formattedDate = new Date(Date.now()).toLocaleDateString('en-US', {
  year:'numeric',
  month:'long',
  day:'numeric'
})

export const newArrivalProducts = inventoryData.filter(item => item.newArrival === true).sort(() => Math.random() - 0.5).slice(0, 4);

export const topsellingProducts = inventoryData.filter(item => item.topSelling === true).sort(() => Math.random() - 0.5).slice(0, 4);
 
export const productsYouMightLike = [...inventoryData].sort(() => Math.random() - 0.5).slice(0, 4);

  
