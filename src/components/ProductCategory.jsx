import { useParams, useNavigate } from "react-router-dom";
import { inventoryData } from "../features/data";
import { productsCategories } from "../features/data";
import { InventoryList } from "./inventory/InventoryList";
import { BannerSection } from "./BannerSection";

export const ProductCategory = () => {
  const { value } = useParams();
  const navigate = useNavigate();

  const filteredProducts = inventoryData.filter(
    item => item.category.toLowerCase().trim() === value.toLowerCase().trim()
  );

  const filteredProductBanner = productsCategories.filter(
    item => item.value.toLowerCase().trim() === value.toLowerCase().trim()
  );

  const goBack = () => {
    navigate(-1)
  }

  const banner = filteredProductBanner[0];

 return (
  <main>
    {value && (
      <section className="product-section">
        {banner && (
          <BannerSection
            imageSrc={banner.img}
            subheading={`Products in ${banner.label} category`}
            tagline= {`Enjoy shopping our elegant ${banner.label}`}
            onClickhandler={goBack}
            buttonText="Go Back"
          />
        )}

        {filteredProducts.length === 0 ? (
          <p>No products found in this category.</p>
        ) : (
          <InventoryList items={filteredProducts}/>
        )}
      </section>
    )}
  </main>
 );
};