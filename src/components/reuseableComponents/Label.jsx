import { getStars, getCurrencySymbol, currencyCoverter } from "../../features/utilities"
import { selectCurrencyFilter } from "../../features/currencyFilterSlice"
import { useSelector } from "react-redux"
import { formatCurrency } from "../../features/utilities"

export const Label = ({item}) => {

    const currencyFilter = useSelector(selectCurrencyFilter);
    
    return(
        <>
        <p className="product-name">{item.name}</p>
        <p className="rating">{getStars(item.rating)&&(getStars(item.rating).map((starSrc, index)=>(
            <img
                key={index}
                src={starSrc}
                alt={starSrc.includes("half-empty") ? "half star" : "full star"}
                className="star-icon"
            />
        )))} 
            {item.rating}/<span>5</span>
        </p>
        
        {item.discountPrice?(
                <p className="product-price">
                {getCurrencySymbol(currencyFilter)}
                {formatCurrency(currencyCoverter(item.discountPrice, currencyFilter))}
                <span className="currency">{currencyFilter}</span>
                <span className="original-price">
                    {getCurrencySymbol(currencyFilter)}
                    {formatCurrency(currencyCoverter(item.price, currencyFilter))}{' '}
                </span>
                <span className="discount-percentage">-{Math.round(((item.price - item.discountPrice)/item.price)*100)}%</span>
                </p>
            ):
            (  <p className="product-price">
                    {getCurrencySymbol(currencyFilter)}
                    {formatCurrency(currencyCoverter(item.price, currencyFilter))}
                      <span className="currency">{currencyFilter}</span>
                </p>
            )}
        </>
    )
}