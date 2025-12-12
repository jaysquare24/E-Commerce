import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../features/cartSlice";
import { selectInventory, loadData} from "../../../features/inventorySlice";
import { useParams  } from "react-router-dom";
import { ProductView } from "../presentationals/ProductView";
import { ProductReviews } from "../presentationals/ProductReviews";
import { formattedDate } from "../../../features/utilities";
import { selectCurrencyFilter } from "../../../features/currencyFilterSlice";
import { MightLikeProductsList } from "../presentationals/MightLikeProductsList";


export const ProductDetailsContainer = () => {
    const inventory = useSelector(selectInventory);
    const currencyFilter = useSelector(selectCurrencyFilter);
    const dispatch = useDispatch();
    const { id } = useParams();


    const Tabs = {
       REVIEW:"review-tab",
       FORM: "write-review-tab"
    }
    
    const product = inventory.find(item => item.id === parseInt(id));
    const [mainImage, setMainImage] = useState(product ? product.img[0] : null);
    const [selectedColor, setSelectedColor] = useState(product ? product.colors[0] : null);
    const [activeTab, setActiveTab] = useState(Tabs.REVIEW);
    const [customerReview, setCustomerReview] = useState({ date: formattedDate});
     const [reviews, setReviews] = useState(product?.reviews || []);

    //update product quantity
    const [quantity, setQuantity] = useState(1);

    const onAddQuantityHandler = () =>{
          setQuantity(prev => prev + 1);
       
    }

    const onSubQuantityHandler = () => {
        if(quantity > 1){
          setQuantity(prev => prev - 1);
        }
    }

    const onChangeReviewHandler = ({target}) =>{
        const {name, value} =target;
        setCustomerReview(prev => ({...prev, [name]:value }))  
    }

    const onSubmitReviewHandler = (e) => {
        e.preventDefault();
        setReviews(prev => [customerReview, ...prev]);
        setCustomerReview({ date: formattedDate});
        alert("Review submitted successfully! \nThank you for your feedback.");

        

    }

   // Item size mapping to update sizes array
    const sizeMap = {
        S: "Small",
        M: "Medium",
        L: "Large",
        XL: "E-Large",
    };

    const productSizeFullMeaningArray = product?.sizes?.map(size => sizeMap[size]).filter(Boolean)||[];
    const [selectedProductSizes, setSelectedProductSizes] = useState(productSizeFullMeaningArray? productSizeFullMeaningArray[0] : null);
   




   //Manage re-render

   useEffect(() => {
      dispatch(loadData());
   }, [dispatch]);

    useEffect(() => {
    if(product){
        setMainImage(product.img[0]);
        setSelectedColor(product.colors[0]);
        setSelectedProductSizes(productSizeFullMeaningArray[0]);
        setReviews(product.reviews);
    }
   }, [product?.id]);

    
    const handleImageClick = (image) => setMainImage(image);
    const handleColorSelect = (color) => setSelectedColor(color);
    const handleSizeSelect = (size) => setSelectedProductSizes(size);

    // Handle Add item to cart
   const handleAddToCart = () => {
        if(product){
            dispatch(
                addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    discountPrice: product.discountPrice,
                    img: product.img[0],
                    qty: quantity,
                    color:selectedColor,
                    size: selectedProductSizes
                })
            )
        }
    } 

    return (
        <>
            {product ? (
              <>
               <ProductView 
                    item={product} 
                    onAddToCart={handleAddToCart} 
                    onClickImage={handleImageClick} 
                    mainImgSrc={mainImage}
                    onClickColor={handleColorSelect}
                    selectedColor={selectedColor}
                    sizes={productSizeFullMeaningArray}
                    onClickSize={handleSizeSelect}
                    selectedSize={selectedProductSizes}
                    quantity={quantity}
                    onClickAddQty={onAddQuantityHandler}
                    onClickSubQty={onSubQuantityHandler}
                    
                />

                <ProductReviews 
                  reviews={reviews}
                  onChangeReview={onChangeReviewHandler}
                  onSubmitReview={onSubmitReviewHandler}
                  customerReview={customerReview}
                  setActiveTab={setActiveTab}
                  activeTab={activeTab}
                  reviewTab={Tabs.REVIEW}
                  formTab={Tabs.FORM}
                />
              </>


            ):(<p>Product not found</p>)}
            
            <MightLikeProductsList/>
            
        </>
    );
}