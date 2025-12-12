import React, { useState, useEffect } from 'react';
import { setSearchTerm, clearSearchTerm, selectSearchTerm } from '../../../features/searchTermSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const SearchTerm = ({setMenuOpen}) => {
  const searchTerm = useSelector(selectSearchTerm);  
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(searchTerm);
  const navigate = useNavigate();
 

  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
    setInputValue('');
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(setSearchTerm(inputValue));
      navigate(`/searchItem/${inputValue}`);
      onClearSearchTermHandler();
    }
  }; 

  return (
    <form id="search-container" onSubmit={onFormSubmit}>

      <button type='submit' className="search-icon" onClick={()=>setMenuOpen(prev => !prev)}>
        <img alt="Search" src="/resources/icons8-search.svg" />
      </button>

      <input
        id="search"
        type="text"
        value={inputValue}
        placeholder="Search for products"
        onChange={onInputChange}
        aria-label="Search products"
      />
    </form>
  );
};