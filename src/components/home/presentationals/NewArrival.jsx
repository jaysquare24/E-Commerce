import { newArrivalProducts } from "../../../features/utilities"
import { Link } from "react-router-dom"
import { ProductList } from "../../reuseableComponents/products/ProductList"

export const NewArrival=()=>{

    
  return(
    <section className="sales-category new-arrival-section">
      <h3>New Arrivals</h3>
      <ProductList items={newArrivalProducts}/>
      <Link to={'shop/new-arrival'} className="view-all-button">View All</Link>
    </section>
  )
}