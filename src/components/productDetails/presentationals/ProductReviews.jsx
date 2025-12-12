import { getStars } from "../../../features/utilities"

export const ProductReviews = ({reviews, onChangeReview, onSubmitReview, customerReview, activeTab, setActiveTab, reviewTab, formTab}) => {
    return(
        <section className="product-review-section">
           <div className="tabs-container">
                <p className={`tab ${activeTab===reviewTab ? 'active-tab': ''}`} onClick={()=>setActiveTab(reviewTab)}>Rating & Reviews</p>
                <p className= {`tab ${activeTab===formTab ? 'active-tab': ''}`} onClick={()=>setActiveTab(formTab)}>Write review</p>
           </div>
           {activeTab === reviewTab && (
            <>
           <p className="num-of-reviews">All Reviews <span>({reviews.length})</span></p>
           <div className="products-reviews">{reviews && reviews.length > 0 && reviews.map((item, index) => (
                <div className="product-review" key={index}>
                    <p className="rating">{getStars(item.rating)&&(getStars(item.rating).map((starSrc, index)=>(
                        <img
                            key={index}
                            src={starSrc}
                            alt={starSrc.includes("half-empty") ? "half star" : "full star"}
                            className="star-icon"
                        />
                    )))} 
                
                    </p>
                    <p className="customer-name">{item.customer} <img src='/resources/check-image.svg' alt='verification icon'/></p>
                    <p className="customer-comment">"{item.comment}"</p>
                    <p className="posted-date">Posted on {item.date}</p>
                </div>
            
               ))}
           </div>
           </>)}
           {activeTab === formTab && (
           <div className="write-review">
              <h3>
                WE CARE TO KNOW HOW YOU FEEL ABOUT OUR PRODUCT
              </h3>
              
               <form onSubmit={onSubmitReview}>
                    <label forLabel="customer">Name (ex: Dave J.)</label>
                    <input 
                      name="customer" 
                      type="text" 
                      id="name" 
                      value={customerReview.customer || ''}
                      onChange={onChangeReview}
                      required
                    />
                    
                    <label forLabel="name">Rating (0-5)</label>
                    <input 
                      id="rating" 
                      name="rating" 
                      type="number" 
                      min="0" 
                      max="5" 
                      step="0.1"
                      value={customerReview.rating || ''}
                      onChange={onChangeReview} 
                      required
                    />
                    
                    <label forLabel="name">Comment</label>
                    <textarea 
                       id="comment" 
                       name="comment" 
                       rows='4' 
                       cols='30' 
                       value={customerReview.comment || ''} 
                       onChange={onChangeReview}
                       required>
                    </textarea>

                    <button type="Submit">Submit</button>
               </form>
              
           </div>)}
        </section>
    )
}