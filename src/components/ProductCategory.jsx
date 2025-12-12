import React, { useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import {
  setCategory,
  setStyle,
  setTopSelling,
  setNewArrival,
  resetFilters,
} from "../features/filterSlice";
import { Filter } from "./reuseableComponents/Filter";
import { useFilteredProducts } from "../hook/useFilteredProducts";
import { ProductList } from "./reuseableComponents/products/ProductList";
import { BannerSection } from "./reuseableComponents/BannerSection";
import { productsCategories, styles, newArrivalAndTopselling } from "../features/data";

export const ProductCategory = () => {
  const { type, value } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const normalizedValue = value?.toLowerCase().trim();
  const filteredProducts = useFilteredProducts();

  // Apply URL segment filters
  useEffect(() => {
    dispatch(resetFilters());

    if (type === "category") dispatch(setCategory(normalizedValue));
    if (type === "style") dispatch(setStyle(normalizedValue));
    if (type === "top-selling") dispatch(setTopSelling(true));
    if (type === "new-arrival") dispatch(setNewArrival(true));
  }, [type, normalizedValue , dispatch]);

  const banner =
    type === "category"
    ? productsCategories.find((i) => i.value.toLowerCase() === normalizedValue)
    : type === "style"
    ? styles.find((i) => i.label.toLowerCase() === normalizedValue)
    : type === "new-arrival"
    ? newArrivalAndTopselling.find( i => i.label.toLowerCase() === "new-arrival")
    : type === "top-selling"
    ? newArrivalAndTopselling.find( i => i.label.toLowerCase() === "top-selling")
    : null;

  return (
    <main>
      <section className="product-section">
        {banner && (
          <BannerSection
            imageSrc={type === "category" || type === "style" ? banner.img : banner.banner}
            subheading={
              type === "category" || type === "style"
                ? `Products in ${banner.label} ${type}`
                : `Products in ${banner.label}`
            }
            tagline={`Enjoy shopping our elegant ${banner.label}`}
            onClickhandler={() => navigate(-1)}
            buttonText="Go Back"
          />
        )}
        
        <div className="product-category-container">
          {/* Filter UI (state-only, not in URL) */}
          {isFilterOpen &&
           <Filter type={type} setIsFilterOpen={setIsFilterOpen}/>
          }

          {/* Products UI */}
          <div className={`products-group-container ${ isFilterOpen ? 'with-filter-open' : ''}`}>
            <div className="products-title-container">
              <h2 className="products-title">
               {banner.label}
              </h2>
              <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <img src="/resources/filter.svg" alt="open filter icon"/>
              </button>
            </div>
            {filteredProducts &&(
              <ProductList items={filteredProducts} label={banner.label} setIsFilterOpen={setIsFilterOpen} />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
