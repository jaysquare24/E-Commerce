import { productsCategories, styles } from "../../features/data"
import { setCategory, setStyle,
  setTopSelling,
  setNewArrival,
  setPriceRange,
  setColor,
  setSize,
  resetFilters, selectFilters} from "../../features/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { isWhiteFamily } from "../../features/utilities";


const colorOptions = ["Red", "Blue", "Green", "Black", "White", "Yellow", "Gray", "brown", "Beige"];
 const sizes= {
    Small:'S',
    Medium: 'M',
    Large:'L',
    "E-large":'XL'
  }
export const  Filter =  ({type, setIsFilterOpen}) => {
    const priceRange = useSelector( selectFilters ).price;
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedStyle, setSelectedStyle] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    return(
        <section className="filter-section">
            <div className="filter-header-container">
              <h3>Filter</h3>
              <button
              className="close-filter-btn"
              onClick={() => setIsFilterOpen(false)}
              ><img src="/resources/icons8-cancel.svg" /></button>
            </div>

            {type !== 'category' && (
            <div className="filter categories">
                <h4>Categories</h4>
                <ul>
                    {productsCategories.map( category => (
                    <li key={category.value}
                    onClick={() => {
                        dispatch(setCategory(category.value.toLowerCase()));
                        setSelectedCategory(category.value);
                    }}
                    className={selectedCategory === category.value ? 'selected' : ''}
                    >
                      {category.value}
                    </li>
                    ))}
                </ul>
            </div>)} 
            
            {type !== 'style' && (
            <div className="filter styles">
                <h4>Dress Styles</h4>
                <ul>
                    {styles.map( style => (
                    <li key={style.label}
                    onClick={() => {
                        dispatch(setStyle(style.label.toLowerCase()));
                        setSelectedStyle(style.label);
                    }}
                    className={selectedStyle === style.label ? 'selected' : ''}
                    >
                      {style.label}
                    </li>
                    ))}
                </ul>
            </div>
            )}

            <div className="filter price-range-container">
                <h4>Price Range</h4>
                <div className="slider">
                    <span>Min</span>
                    <input
                    type="range"
                    min="0"
                    max="150"
                    value={priceRange.min}
                    onChange={(e) =>
                        dispatch(setPriceRange({ ...priceRange, min: Number(e.target.value) }))
                    }
                    className="thumb thumb-left"
                    /> 
                    <span>${priceRange.min}</span>

                    <br />
                    <span>Max</span>
                    <input
                    type="range"
                    min="150"
                    max="1000"
                    value={priceRange.max}
                    onChange={(e) =>
                        dispatch(setPriceRange({ ...priceRange, max: Number(e.target.value) }))
                    }
                    className="thumb thumb-right"
                    /><span>${priceRange.max}</span>
                </div>

            </div>


            <div className="filter colors">
                <h4>Colors</h4>
                <ul>
                    {colorOptions.map( color => (   
                    <li key={color}
                    onClick={() => {
                        dispatch(setColor(color.toLowerCase()));
                        setSelectedColor(color);
                    }}
                    style={{backgroundColor:color}}
                    className={isWhiteFamily(color.toLowerCase()) ? 'filter-color-white' : ''}
                    >
                      {selectedColor === color ? <span>✓</span> : ''}
                    </li>
                    ))}
                </ul>
            </div>

            <div className="filter sizes">
                <h4>Sizes</h4>
                <ul>
                    {Object.entries(sizes).map(([key, value]) => (   
                    <li key={key}
                    onClick={() => {
                        dispatch(setSize(value.toLowerCase()));
                        setSelectedSize(value);
                    }}
                    className={selectedSize === value ? 'selected' : ''}
                    >
                      {key}
                    </li>
                    ))}
                </ul>
            </div>

            <button
            className="apply-filters-btn"
            onClick={() => setIsFilterOpen(false)}
            >
             Apply Filters
            </button>
           
        </section>
    )
}