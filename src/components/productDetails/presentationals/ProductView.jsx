import { isWhiteFamily } from "../../../features/utilities";
import { Label } from "../../reuseableComponents/Label";
 

export const ProductView = ({
    item, 
    onAddToCart, 
    onClickImage,
    mainImgSrc, 
    selectedColor,
    onClickColor,
    sizes,
    selectedSize,
    onClickSize,
    quantity,
    onClickSubQty,
    onClickAddQty}) => {

    const { name, img, description, colors} = item;
    return (
    <section className="product-view-section">    
        <div id="product-detail-container">
            <div className='product-image-container'>
                <div className="thumbnail-images">
                    {img && img.length >0 && img.map((imgSrc, index)=>(
                        <img 
                        key={index}
                        src={imgSrc}
                        alt={`${name}-image-${index + 1}`}
                        onClick={()=>onClickImage(imgSrc)}
                        className="thumbnail"
                        />
                    ))}   
                </div>
                <div className='main-product-image'>
                    <img src={mainImgSrc} alt={name}  loading="lazy"/>
                </div>
            </div>
            <div className="product-details-content">
                <Label item={item}/>
                <p className="product-description">{description}</p>
                <div className="color-options">
                    <p>Select color</p>
                    <div className="color-options-container">
                        {colors && colors.length > 0 && colors.map((colorOption, index) => (
                            <div 
                                key={index}
                                className={`color-option ${isWhiteFamily(colorOption) ? 'color-white' : ''}`}
                                style={{ backgroundColor: colorOption }}
                                onClick={() => onClickColor(colorOption)}
                            >
                                {selectedColor === colorOption ? '✓' : ''}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="size-options">
                    <p>choose size</p>
                    <div className="size-options-container">
                        {sizes && sizes.length > 0 && sizes.map((sizeOption, index) => (
                            <p 
                                key={index}
                                className={`size-option ${selectedSize === sizeOption ? 'selected-size' : ''}`}
                                onClick={() => onClickSize(sizeOption)}
                            >
                                {sizeOption}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="add-to-cart-container">
                  <div className="quantity-container">
                    <button className="add-substract-button" onClick={onClickSubQty}>-</button>
                    <p>{quantity}</p>
                    <button className="add-quantity-button" onClick={onClickAddQty}>+</button>
                  </div>
                  <button className="product-add-to-cart-button" onClick={onAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    </section>
    )
}