import {
  currencyCoverter, getSubTotal, getShippingFee, getGrandTotal, 
  getCurrencySymbol, getStars, formattedDate, newArrivalProducts, 
  topsellingProducts, productsYouMightLike, isWhiteFamily, getDiscount,
  getDiscountPercentage, formatCurrency
} from "../features/utilities";
import { cartSlice, addItem, removeItem, clearCart, changeItemQuantity  } from "../features/cartSlice";
import { currencyFilterSlice, setCurrency } from "../features/currencyFilterSlice";
import { inventorySlice, loadData, filterDataByCategory } from "../features/inventorySlice";
import { searchTermSlice, setSearchTerm, clearSearchTerm } from "../features/searchTermSlice";
import { inventoryData } from "../features/data";
import { mockInventoryData } from "./mockInventoryData";

jest.mock('../features/data', () => {
  const { mockInventoryData } = require('./mockInventoryData');
  return { inventoryData: mockInventoryData };
});


   

const reducer = inventorySlice.reducer;

describe("currencyConverter", () => {
  it("should return the same price in currency inputed", () => {
    //setup
    const inputAmount = 100;
    //verify
    expect(currencyCoverter(inputAmount, 'USD')).toBe(100);
    expect(currencyCoverter(inputAmount, 'NGN')).toBe(100*1550);
    expect(currencyCoverter(inputAmount, 'EUR')).toBe(100*0.86);
    expect(currencyCoverter(inputAmount, 'CAD')).toBe(100*1.33);
 });
})

describe("getSubTotal",()=>{
  it("it should return cart sub-total amount",()=>{
    //setup
    const cart ={
     shirt: {
        price:100,
        quantity: 3
      },

      shoe: {
        price:100,
        quantity: 2
      },
    };
    const inputCurrency = "USD";
    const expectedOut = "500.00"; 
    //exercise
    const result = getSubTotal(cart, inputCurrency);
    //verify
    expect(result).toBe(expectedOut)
  });
});

describe('getShippingFee', ()=>{
  it('it should return cart shippinng fee', ()=>{
    //setup
    const cart ={
     shirt: {
        price:100,
        quantity: 3
      },
    };
    const inputCurrency = "USD";
    const expectedOut = 6;
    //exercise
    const result = getShippingFee(cart, inputCurrency);
    //verify
    expect(result).toBe(expectedOut);
  })
})

describe('getGrandTotal',()=>{
  it('it should return cart grand total amount',()=>{
    //setup
    const cart ={
     shirt: {
        price:100,
        quantity: 3,
        discountPrice: 92.55,
      },

      shoe: {
        price:100,
        quantity: 2
      },
    };

    const inputCurrency = "USD";
    const expectedOut = "487.65";

    //exercise
    const result = getGrandTotal(cart, inputCurrency);
    //verify
    expect(result).toBe(expectedOut);
  })
});

describe('getDiscount', ()=>{
  it ('it should return total discount amount in the cart', ()=>{
    //setup
    const cart ={
     shirt: {
        price:100,
        quantity: 3,
        discountPrice: 80,
      },
      shoe: {
        price:150,
        quantity: 2,
        discountPrice: 120,
      }
    };
    const expectedOut = 120;
    //exercise
    const result = getDiscount(cart);
    //verify
    expect(result).toBe(expectedOut);
  })
});

describe('getDiscountPercentage', ()=>{
  it('it should return discount percentage in the cart', ()=>{
    //setup 
    const cart ={
     shirt: {
        price:100,
        quantity: 3,
        discountPrice: 80,
      }
    };
    const expectedOut = 20;
    //exercise
    const result = getDiscountPercentage(cart);
    //verify
    expect(result).toBe(expectedOut);

  });
});

describe(" get currency symbol",()=>{
  it("it should return currency symbol",()=>{
    //setup
    const inputCurrency = 'NGN';
    const expectedOutput = '₦';
    //exercise
    const result = getCurrencySymbol(inputCurrency);
    //verify
    expect(result).toEqual(expectedOutput)
  })
})

describe('getStars', () => {

  it('renders correct number of full stars', () => {
    const rating = 3.2;
    const stars = getStars(rating);

    expect(stars.length).toBe(3); // 3 full stars only
    stars.forEach((star, index) => {
     expect(star).toStrictEqual('/resources/full-star.svg');
    });
  });

  it('renders a half star when rating has .5 or more fraction', () => {
    const rating = 2.7;
    const stars = getStars(rating);

    expect(stars.length).toBe(3); // 2 full + 1 half
    expect(stars[2]).toStrictEqual('/resources/half-star.svg');
    
  });

  it('returns an empty array when rating is 0', () => {
    const stars = getStars(0);
    expect(stars.length).toBe(0);
  });

  it('checks floor() rounding works properly', () => {
    const stars = getStars(4.2);
    // 4 full stars, no half star
    expect(stars.length).toBe(4);
    expect(stars[0]).toStrictEqual('/resources/full-star.svg');
  });

});

describe("cartSlice", ()=>{
  it('it should return updated state from undefined',()=>{
    //setup;
    const expectedState ={1:{name:'shoe', img:'src', quantity:1, price:200, color:undefined, discountPrice:undefined, size:undefined}};
    //exercise
    const action =addItem({id:1, name:'shoe', img:'src', price:200, qty:1});
    const result= cartSlice.reducer(undefined,action);
    //verify
    expect(result).toEqual(expectedState);
  });


  it('it should return new state from previous update',()=>{
    //setup;
    
    const expectedState ={1:{name:'shoe', img:'src', quantity:2, price:200, color:undefined, discountPrice:undefined, size:undefined}};
    //exercise
    const action = addItem({id:1, name:'shoe', img:'src', price:200 , qty:1});
    const result1 = cartSlice.reducer(undefined,action);

    const action2 = addItem({id:1, name:'shoe', img:'src', price:200, qty:1});
    const result2 = cartSlice.reducer(result1,action2);
    //verify
    expect(result2).toEqual(expectedState);
  })

  it('it removes item from the state', ()=>{
    //setup
    const expectedState={};
    const addItemAction =addItem({id:1, name:'shoe', img:'src', price:200, qty:1});
    const state = cartSlice.reducer(undefined,addItemAction);
    //exercise
    const removeItemAction=removeItem({id:1});
    const result = cartSlice.reducer(state, removeItemAction);
    //verify
    expect(result).toEqual(expectedState);
    
  })

  it.each([{ name: "shoe", price: 200, img: "shoe.jpg" },
  { name: "bag", price: 500, img: "bag.jpg" }])('should clear cart after adding %s',(product)=>{
    //setup
    const addItemAction= addItem(product);
    const state = cartSlice.reducer(undefined, addItemAction);
    const expectedState={}
    //exercise
    const clearAction = clearCart();
    const result = cartSlice.reducer(state, clearAction);
    //verify
    expect(result).toEqual(expectedState);
  })

  it('it should change product quantity',()=>{
    //setup
    const addItemAction= addItem({id:2, name: "bag", price: 500, img: "bag.jpg", qty:1 });
    const state = cartSlice.reducer(undefined, addItemAction);
    const expectedQuantity = 4;

    //exercise
    const changeItemQuantityAction = changeItemQuantity({id:2, quantity:4});
    const result = cartSlice.reducer(state, changeItemQuantityAction);

    //verify
    expect(result[2].quantity).toBe(expectedQuantity);


  })
})

describe('currencyFilterSlice',()=>{
  it('it set currency', ()=>{
    //setup
    const expectedCurrency= 'EUR';
    //exercise
    const setCurrencyAction = setCurrency('EUR')
    const result = currencyFilterSlice.reducer(currencyFilterSlice.getInitialState(), setCurrencyAction);
    //verify
    expect(result).toBe(expectedCurrency);
  })
});

describe("inventorySlice", () => {

  it("should load inventory data into allItems and reset filteredItems", () => {
    const action = loadData(mockInventoryData);
    const result = reducer(undefined, action);

    expect(result.allItems).toEqual(mockInventoryData);
    expect(result.filteredItems).toEqual([]);
  });

  it("should fall back to default inventoryData when no payload is given", () => {
    const action = loadData();
    const result = reducer(undefined, action);

    expect(result.filteredItems).toEqual([]);
  });

  
  it("should filter items by category", () => {
    const initial = { allItems: mockInventoryData, filteredItems: [] };
    const action = filterDataByCategory({ nomalizedValue: "bags", type: "category" });

    const result = reducer(initial, action);

    expect(result.filteredItems.length).toBe(3);
    expect(result.filteredItems.map(i => i.id)).toEqual(
    expect.arrayContaining([1, 3, 4]));
 });

  
  it("should filter items by style", () => {
    const initial = { allItems: mockInventoryData, filteredItems: [] };
    const action = filterDataByCategory({ nomalizedValue: "gym", type: "style" });

    const result = reducer(initial, action);

    expect(result.filteredItems.length).toBe(1);
    expect(result.filteredItems[0].id).toBe(2);
  });

  
  it("should filter items by new arrival", () => {
    const initial = { allItems: mockInventoryData, filteredItems: [] };
    const action = filterDataByCategory({ nomalizedValue: "", type: "new-arrival" });

    const result = reducer(initial, action);

    expect(result.filteredItems.length).toBe(1);
    expect(result.filteredItems[0].id).toBe(1);
  });

  
  it("should filter items by top-selling", () => {
    const initial = { allItems: mockInventoryData, filteredItems: [] };
    const action = filterDataByCategory({ nomalizedValue: "", type: "top-selling" });

    const result = reducer(initial, action);

    expect(result.filteredItems.length).toBe(2);
   expect(result.filteredItems.map(i => i.id)).toEqual(expect.arrayContaining([2, 4]));
    
  });

  
  it("should return empty array for unknown filter type", () => {
    const initial = { allItems: mockInventoryData, filteredItems: [] };
    const action = filterDataByCategory({ nomalizedValue: "anything", type: "unknown" });

    const result = reducer(initial, action);

    expect(result.filteredItems).toEqual([]);
  });

});


describe('searcTermSlice',()=>{
  it('should return search term',()=>{
    //setup
    const expectedTerm = 'bag';
    //exercise
    const result = searchTermSlice.reducer(searchTermSlice.getInitialState(), setSearchTerm('bag'));
    //verify
    expect(result).toBe(expectedTerm);

  });

  it('should clear search term', ()=>{
    //setup
    const expectedTerm = '';
    const state = searchTermSlice.reducer(searchTermSlice.getInitialState(), setSearchTerm('bag'));
    //exercise
    const result = searchTermSlice.reducer(state, clearSearchTerm(''));
    //verify
    expect(result).toBe(expectedTerm);
  });
})

describe("isWhiteFamily", () => {
  it("returns true for white family colors", () => {
    expect(isWhiteFamily("white")).toBe(true);
    expect(isWhiteFamily("ivory")).toBe(true);
    expect(isWhiteFamily("cream")).toBe(true);
    expect(isWhiteFamily("off-white")).toBe(true);
  });

  it("returns false for non-white-family colors", () => {
    expect(isWhiteFamily("black")).toBe(false);
    expect(isWhiteFamily("navy")).toBe(false);
    expect(isWhiteFamily("red")).toBe(false);
  });
});

describe("formattedDate", () => {
  it("returns a valid date string in 'Month Day, Year' format", () => {
    const regex = /^[A-Za-z]+ \d{1,2}, \d{4}$/;    
    expect(formattedDate).toMatch(regex);
  });
});

describe("newArrivalProducts", () => {
  it("returns only products marked as newArrival", () => {
    expect(newArrivalProducts.every(p => p.newArrival)).toBe(true);
  });

  it("returns max 4 products", () => {
    expect(newArrivalProducts.length).toBeLessThanOrEqual(4);
  });
});

describe("topsellingProducts", () => {
  it("returns only products marked as topSelling", () => {
    expect(topsellingProducts.every(p => p.topSelling)).toBe(true);
  });

  it("returns max 4 products", () => {
    expect(topsellingProducts.length).toBeLessThanOrEqual(4);
  });
});

describe("productsYouMightLike", () => {
  it("returns exactly 4 products", () => {
    expect(productsYouMightLike.length).toBe(4);
  });

  it("returns random products from inventory", () => {
    const ids = inventoryData.map(i => i.id);
    expect(productsYouMightLike.every(p => ids.includes(p.id))).toBe(true);
  });
});

