import {
    getCurrencySymbol,
    getShippingFee, 
    formatCurrency,
    getSubTotal,
    getGrandTotal, 
    getDiscount, 
    getDiscountPercentage,
    currencyCoverter
} from "../../../features/utilities"

export const OrderSummary = ({cart, currencyFilter}) => {
    
    return (
        <div className="order-summary">
           <h4>Order Summary</h4>
           <div className="summary-container">
                <p className="attribute-container">
                    <span className="label">Subtotal</span>
                    <span className="subtotal value">
                      {getCurrencySymbol(currencyFilter)}
                      {getSubTotal(cart, currencyFilter)}
                    </span>
                </p>
                <p className="attribute-container">
                    <span className="label">Discount (-{getDiscountPercentage(cart)}%) </span>
                    <span className="Discount value">
                        {getCurrencySymbol(currencyFilter)}
                        -{formatCurrency(currencyCoverter(getDiscount(cart), currencyFilter))}
                    </span>
                </p>
                <p className="attribute-container">
                    <span className="label">Delivery</span> 
                    <span className="delivery value">
                      {getCurrencySymbol(currencyFilter)}
                      {formatCurrency(getShippingFee(cart, currencyFilter))}
                    </span>
                </p>
                <p className="attribute-container">
                    <span className="label">Total</span>
                    <span className="totl value">
                      {getCurrencySymbol(currencyFilter)}
                      {getGrandTotal(cart, currencyFilter)}
                    </span>
                </p>
           </div>
           <div className="promo-container">
              <input name="promo"  id="promo" pattern="[A-Za-z0-9]+" placeholder="Add promo code"/>
              <img src="/resources/icons8-price-tag-24.png"  alt="tag icon" className="tag-icon"/>
              <button type="submit">Apply</button>
           </div>
           <button
            className='checkout-button'
            onClick={() => alert("Sorry! Feature not added yet.")}
            >
              Go to Checkout
              <img src='/resources/icons8-right-arrow-24.png' alt="checkout directive icon" className="checkout-arrow"/>
            </button>
        </div>
    )
}