import { CurrencyFilter } from "./currency/CurrencyFilter";
import { SearchTerm } from "./SearchTerm";
import { CartButton } from "./cart/CartButton";



export const Header = () => {
    return(
        <header className='header'>
            <div className="header-title-marquee">
              <p className="header-title">Hello! You are Welcome to Jay Elegant Fashion Store!</p>
           </div>
            <div className="header-controls">
                <CurrencyFilter/>
                <SearchTerm/>
                <CartButton/>
            </div>
        </header>
    )
}