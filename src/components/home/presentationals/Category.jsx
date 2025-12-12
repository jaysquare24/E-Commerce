import { productsCategories } from "../../../features/data";
import { Link } from "react-router-dom";

export const Category = () => {
    return (
        <section className="products-categories-section">
        <h3>Products Categories</h3>
        <ul className="products-categories">
          {productsCategories.map(item => (
            <li
              key={item.label}
              className="product-category"
            >
             <Link 
               to={`/shop/category/${item.value}`}
              >
                <img
                  src={item.img}
                  alt={`${item.label} category image`}
                />
                <p>{item.label}</p>
              </Link> 
            </li>
          ))}
        </ul>
      </section>
    )
}