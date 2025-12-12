import { Link } from "react-router-dom";
import { Label } from "../../reuseableComponents/Label";
 
export const MightLikeProductsItem = ({ product}) => {

    return (
        
        <div className="item">
            <Link 
                to={`/product/${product.id}`} 
                style={{ color: 'inherit', textDecoration: 'none' }}
            >
                <div className="inventoryImage-container">
                    <img src={product.img[0]} alt={product.name} />

                    <span className="quick-view-button">
                        Quick View
                    </span>
                </div>
            </Link>
           <div className="">
             <Label item={product} />
           </div>
        </div>
        
        
    );
};
