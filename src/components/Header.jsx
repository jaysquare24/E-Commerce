import { CurrencyFilter } from "./currency/CurrencyFilter";
import { SearchTerm } from "./search/SearchTerm";
import { CartButton } from "./cart/CartButton";
import { NavLink } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { productsCategories } from "../features/data";
import { selectProductCategory, setProductCategory } from "../features/productCategorySlice";
import { useDispatch, useSelector } from 'react-redux';

export const Header = () => {
  const productCategory = useSelector(selectProductCategory);
  const dispatch = useDispatch();
  const [openCategories, setOpenCategories] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);  

  // Close category dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpenCategories(false);
      }
    }
    if (openCategories) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCategories]);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleCategoryChange = (category) => {
    dispatch(setProductCategory(category));
  };

  const menuImage = menuOpen
    ? "/resources/icons8-cancel-24.png"
    : "/resources/icons8-menu-24.png";

  return (
    <header className='header'>
      {showNotification && (
        <div className="header-notification">
          <div className="header-title-marquee">
            <p className="header-title">Attention!!! Delivery Fee is Not Included in All Payment. It Will Be Paid Directly To The Handlers.</p>
          </div>
          <button
            onClick={() => {
              setShowNotification(false);
            }}
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
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <img id="menu-icon" src={menuImage} alt="Menu icon" />
        </button>

        <div className="header-logo-container">
          <img src="/resources/store-logo.png" alt="Jay Elegant Fashion Store Logo" />
        </div>

        <div className={`header-controls ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? "link active" : "link"} onClick={()=>setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/aboutUs" className={({ isActive }) => isActive ? "link active" : "link"} onClick={()=>setMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? "link active" : "link"} onClick={()=>setMenuOpen(false)}>Shop</NavLink>
          <SearchTerm setMenuOpen={setMenuOpen} />
          <div ref={dropdownRef}>
            <button
              className="category-dropdown-toggle"
              onClick={() => setOpenCategories(prev => !prev)}
              type="button"
            >
              Select Categories
            </button>
            {openCategories && (
              <div className="category-dropdown-list">
                {productsCategories.map(item => (
                  <NavLink
                    to={`/shop/category/${item.value}`}
                    key={item.value}
                    className={productCategory === item.value ? "category-button selected" : "category-button"}
                    onClick={() => {
                      setOpenCategories(false);
                      setMenuOpen(false)
                      handleCategoryChange(item.value);
                      
                    }}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          <CurrencyFilter setMenuOpen={setMenuOpen} /> 
        </div>
        <div className="searchAndCart-group">
          <button type='button' className="mobileView-searchButton" onClick={()=>setMenuOpen(prev => !prev)}>
            <img alt="Search" src="/resources/icons8-search.svg"/>
          </button>
          <CartButton />
        </div>
      </div>
    </header>
  );
};
