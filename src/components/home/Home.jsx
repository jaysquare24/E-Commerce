import { productsCategories } from "../../features/data";
import { WelcomeBanner } from "./WelcomeBanner";
import { TestimonialSlider } from "./Testimonial";
import { Link } from "react-router-dom";
import { setProductCategory } from "../../features/productCategorySlice";
import {  useDispatch } from "react-redux";



export const Home = () => {
  const dispatch = useDispatch ()

  const handleCategoryChange = (category) => {
     dispatch(setProductCategory(category));
  };
  return (
    <main>
      <WelcomeBanner />
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
               onClick={() => {handleCategoryChange(item.value)}}
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
     
      <section className="testimonial-section">
        <h3>Client Impressions</h3>
        <p>Nothing makes us happier than happy customers.Discover what our esteemed customers are saying about their experience with our fashion and service.</p>
        <TestimonialSlider/>
      </section>
      <section className="logistics-section">
          <h3>Swift & Reliable Delivery</h3>
          <p>Wherever you are, we’ll deliver your fashion essentials right to your doorstep fast, secure, and hassle-free. Shop with confidence and get your style on time.</p>
          <img  className="logistics-man-image" src="/resources/delivery-image-removebg-preview.png" alt="delivery man image"/>
          <div className="logistics-logos">
              <img src="resources/dhl-logo-transparent-free-png.webp" alt="delivery company logo"/>
              <img src="resources/fedEx.webp" alt="delivery company logo"/>
              <img src="resources/time.jpeg" alt="delivery company logo"/>
              <img src="resources/gig.png" alt="delivery company logo"/>
          </div>
      </section>
    </main>
  );
};