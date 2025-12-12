import { MightLikeProductsItem } from "./MightLikeProductsItem";
import { productsYouMightLike } from "../../../features/utilities";

export const MightLikeProductsList = () => {
    return (
        <section className="might-like-section">
            <h3>YOU MIGHT ALSO LIKE</h3>
            <div className="products-container might-like-container ">
                {productsYouMightLike?.map((product) => (
                    <MightLikeProductsItem key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};
