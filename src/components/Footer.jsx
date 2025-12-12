import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer">
    <div className="newsletter">
      <h3>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
        <form className="newsletter-form" aria-label="Newsletter Subscription Form">
        <input
          type="email" name="email" placeholder= " &#9993; Enter your email address"
          aria-label="Email Address"
          required  
          />
        <button type="submit" className="subscribe-button">Subscribe to Newsletter</button>
        </form>
    </div>

    <div className="footer-container">
      <div className="item-1">
        <div className="logo-container">
          <p className="logo">SHOP.CO</p>
          <p className="catch">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
          <div className="social-media-icons">
            <a href="https://www.twitter.com/" target="_blank" rel="noopener" aria-label="Facebook">
              <img src="/resources/x.svg" alt="Facebook icon" className="media-icon"/>  
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Twitter">
              <img src="/resources/facebook.svg" alt="Twitter icon" className="media-icon"/>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">
              <img src="/resources/instagram.svg" alt="Instagram icon" className="media-icon"/>
            </a>
          </div>
        </div>
        <nav className="quick-links-container" aria-label="Footer Quick Links">
          <h4>QUICK LINKS</h4>
          <div className="links">
            <Link to="/shop">Shop</Link>
            <Link to="/">Home</Link>
            <Link to="/aboutUs">About Us</Link>
          </div>
        </nav>
      
        <nav className="quick-links-container" aria-label="Footer Quick Links">
          <h4>FAQ</h4>
          <div className="links">
            <Link to="/shop">Account</Link>
            <Link to="/">Delivery Details</Link>
            <Link to="/aboutUs">Orders</Link>
            <Link to="/aboutUs">Paymen</Link>
          </div>
        </nav>

        <div className="contacts-container">
          <h4>CONTACTS</h4>
          <p><img src="/resources/icons8-phone-call-48.png" alt="" aria-hidden="true"/> +2347063457926</p>
          <p><img src="/resources/icons8-location-32.png" alt="" aria-hidden="true"/> shop 10 Dave plaza opposite Hero gate, Trade fair, Osogbo.</p>
          <p><img src="/resources/icons8-mail-48.png" alt="" aria-hidden="true"/> shop.co@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Shop.co &copy;  2000-2023, All Rights Reserved</p>
        <div className="payment-methods-group">
          <div className="payment-method-container">
           <img src="/resources/Visa.svg" alt="Payment method"/> 
          </div>
           <div className="payment-method-container">
           <img src="/resources/Mastercard.svg" alt="Payment method"/> 
          </div>
           <div className="payment-method-container">
           <img src="/resources/Paypal.svg" alt="Payment method"/> 
          </div>
          <div className="payment-method-container">
           <img src="/resources/Apple-Pay.svg" alt="Payment method"/> 
          </div>
          <div className="payment-method-container">
           <img src="/resources/G-Pay.svg" alt="Payment method"/> 
          </div>
        </div>
      </div>
      <p className="icon8">Icons by <a href="https://icons8.com/" target="_blank" rel="noopener" aria-label="Icon8 site">Icons8</a></p>
    </div>

  </footer>
);