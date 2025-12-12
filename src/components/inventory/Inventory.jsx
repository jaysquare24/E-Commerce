import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectInventory, loadData } from '../../features/inventorySlice';
import { ProductList } from '../reuseableComponents/products/ProductList';
import { Filter } from '../reuseableComponents/Filter';
import { useFilteredProducts } from '../../hook/useFilteredProducts';
import { resetFilters } from '../../features/filterSlice';
import { useParams } from 'react-router-dom';



export const Inventory = () => {
  const inventory = useSelector(selectInventory);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const {type} = useParams();

 

  const filteredProducts = useFilteredProducts();

  const displayInventory = filteredProducts.length > 0 ? filteredProducts : inventory;

  useEffect(() => {
    dispatch(resetFilters());
    setLoading(true);
    dispatch(loadData());

    // Simulate async loading (remove setTimeout in real async code)
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [dispatch]);

  return( 
    <section className='inventory-section'>
      <div className='product-category-container'>
        {isFilterOpen &&
        <Filter setIsFilterOpen={setIsFilterOpen} />
        }
        <div className={ `products-group-container ${ isFilterOpen ? 'with-filter-open' : ''}`}>
          <div className="products-title-container">
            <h2 className="products-title">
              {type? type === "new-arrival"? "New Arrival" : "Top Selling"
              : "All Products"
              }
            </h2>
            <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <img src="/resources/filter.svg" alt="open filter icon"/>
            </button>
          </div>
         <ProductList items={displayInventory} loading={loading} />
        </div>
      </div>
    </section>
  );
};