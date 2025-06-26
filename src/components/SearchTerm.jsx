import React,{ useState, useEffect } from 'react';
import { setSearchTerm, clearSearchTerm, selectSearchTerm } from '../features/searchTermSlice.js';
import { useDispatch, useSelector } from 'react-redux';


const searchIconUrl =
  'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
const clearIconUrl =
  'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';

export const SearchTerm = () => {
  const searchTerm = useSelector(selectSearchTerm);  
  const dispatch =  useDispatch();
  const [inputValue, setInputValue] = useState(searchTerm);
  
    useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput);
    dispatch(setSearchTerm(userInput));
    
  };

  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div id="search-container">
      <img id="search-icon" alt="" src={searchIconUrl} />
      <input
        id="search"
        type="text"
        value={inputValue}
        onChange={onSearchTermChangeHandler}
        placeholder="Search products"
      />
      {searchTerm.length > 0 && (
        <button
          onClick={onClearSearchTermHandler}
          type="button"
          id="search-clear-button"
        >
          <img src={clearIconUrl} alt="" />
        </button>
      )}
    </div>
  );
};
