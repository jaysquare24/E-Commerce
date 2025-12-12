import React, { useState, useRef, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CurrencyFilter } from "../presentationals/currency/CurrencyFilter";
import { SearchTerm } from "../presentationals/SearchTerm";
import { CartButton } from "../presentationals/CartButton";
import { productsCategories, styles } from "../../../features/data";


export const Header = () => {
  const { type, value } = useParams();

  // UI state
  const [openCategories, setOpenCategories] = useState(false);
  const [openStyles, setOpenStyles] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // refs
  const categoriesDropdownRef = useRef(null);
  const stylesDropdownRef = useRef(null);
  const menuRef = useRef(null);

  // Close dropdowns/menus when clicking outside any of them
  useEffect(() => {
    function handleClickOutside(event) {
      const target = event.target;

      // If click is outside categories dropdown => close it
      if (
        openCategories &&
        categoriesDropdownRef.current &&
        !categoriesDropdownRef.current.contains(target)
      ) {
        setOpenCategories(false);
      }

      // If click is outside styles dropdown => close it
      if (
        openStyles &&
        stylesDropdownRef.current &&
        !stylesDropdownRef.current.contains(target)
      ) {
        setOpenStyles(false);
      }

      // If click is outside menu => close it
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    }

    // Add listener only when any of these panels are open to reduce overhead
    if (openCategories || openStyles || menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCategories, openStyles, menuOpen]);

  const menuImage = menuOpen
    ? "/resources/icons8-cancel-24.svg"
    : "/resources/icons8-menu.svg";

  return (
    <header className="header">
      {showNotification && (
        <div className="header-notification">
          <div className="header-title-marquee">
            <p className="header-title">
              Attention!!! Delivery Fee is Not Included in All Payment. It Will Be Paid Directly To The Handlers.
            </p>
          </div>
          <button
            onClick={() => setShowNotification(false)}
            aria-label="Close notification"
            type="button"
          >
            close
          </button>
        </div>
      )}

      <div className="main-header" ref={menuRef}>
        <button
          type="button"
          className="menu-button"
          id="menu-button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <img id="menu-icon" src={menuImage} alt="Menu icon" />
        </button>

        <p className="logo">SHOP.CO</p>

        <div className={`header-controls ${menuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link active" : "link")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/aboutUs"
            className={({ isActive }) => (isActive ? "link active" : "link")}
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? "link active" : "link")}
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </NavLink>

          {/* Categories dropdown */}
          <div ref={categoriesDropdownRef} className="dropdown-wrapper">
            <button
              className="dropdown-toggle"
              type="button"
              aria-expanded={openCategories}
              aria-haspopup="menu"
              onClick={() => {
                // toggle categories and ensure styles is closed
                setOpenCategories(prev => !prev);
                setOpenStyles(false);
              }}
            >
              Categories  <img src="/resources/icons8-sort-down-16.png" className="dropdown-arrow" alt=" sort-down-arrow" aria-hidden="true"/>
            </button>

            {openCategories && (
              <div className="category dropdown-list" role="menu">
                {productsCategories.map(item => (
                  <NavLink
                    to={`/shop/category/${item.value}`}
                    key={item.value}
                    className={value === item.value ? "option-button selected" : "option-button"}
                    onClick={() => {
                      setOpenCategories(false);
                      setMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Styles dropdown */}
          <div ref={stylesDropdownRef} className="dropdown-wrapper">
            <button
              className="dropdown-toggle"
              type="button"
              aria-expanded={openStyles}
              aria-haspopup="menu"
              onClick={() => {
                // toggle styles and ensure categories is closed
                setOpenStyles(prev => !prev);
                setOpenCategories(false);
              }}
            >
              Styles <img src="/resources/icons8-sort-down-16.png" className="dropdown-arrow" alt=" sort-down-arrow" aria-hidden="true"/>
            </button>

            {openStyles && (
              <div className="style dropdown-list" role="menu">
                {styles && styles.map(item => (
                  <NavLink
                    to={`/shop/style/${item.label}`}
                    key={item.label}
                    className={type === item.label ? "option-button selected" : "option-button"}
                    onClick={() => {
                      setOpenStyles(false);
                      setMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          <CurrencyFilter setMenuOpen={setMenuOpen} />
          <SearchTerm setMenuOpen={setMenuOpen} />
        </div>

        <div className="searchAndCart-group">
          <button
            type="button"
            className="mobileView-searchButton"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle search/menu"
          >
            <img alt="Search" src="/resources/icons8-search.svg" />
          </button>

          <CartButton />
        </div>
      </div>
    </header>
  );
};
