import{topsellingProducts} from "../../../features/utilities"
import { Link } from "react-router-dom"
import { ProductList } from "../../reuseableComponents/products/ProductList"

export const TopSelling=()=>{   
  return(
    <section className="sales-category top-selling-section">
      <h3>Top Selling</h3>
      <ProductList items={topsellingProducts}/>
      <Link to={'/shop/top-selling'} className="view-all-button">View All</Link>
   </section>
  )
}