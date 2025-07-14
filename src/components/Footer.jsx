import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer">
    <div className="item-1">
      <div className="logo-container">
        <img src="/resources/store-logo.png" alt="Jay Elegant Fashion Store Logo"/>
        <p>Where Elegance Meets Everyday.</p>
      </div>
      <nav className="quick-links-container" aria-label="Footer Quick Links">
        <h4>Quick Links</h4>
        <div className="links">
          <Link to="/shop">Shop</Link>
          <Link to="/">Home</Link>
          <Link to="/aboutUs">About Us</Link>
        </div>
      </nav>
      <div className="contacts-container">
        <h4>Contacts</h4>
        <p><img src="/resources/icons8-phone-call-48.png" alt="" aria-hidden="true"/> +2347063457926</p>
        <p><img src="/resources/icons8-location-32.png" alt="" aria-hidden="true"/> shop 10 Dave plaza opposite Hero gate, Trade fair, Osogbo.</p>
        <p><img src="/resources/icons8-mail-48.png" alt="" aria-hidden="true"/> jayelegantstore@gmail.com</p>
      </div>
    </div>
    <p>&copy; - All Rights Reserved. Jay Elegant Fashion Store.</p>
    <p>Icons by <a href="https://icons8.com/" target="_blank" rel="noopener" aria-label="Icon8 site">Icons8</a></p>
  </footer>
);