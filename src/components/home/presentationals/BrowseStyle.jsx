import { styles } from "../../../features/data";
import { Link } from "react-router-dom" ;

export const BrowseStyle=()=>{
    return(
        <section className="browse-style-section">
        <h3>BROWSE BY DRESS STYLE</h3>
        <ul className="browse-style">{styles && (styles.map((item, index) => (
            <li key={index} className="browse-style-card">
                <Link to={`shop/style/${item.label}`}>
                    <img src={item.img} alt={item.label} className="browse-style-image"/>
                    <p className="browse-style-label">{item.label}</p>
                </Link>
            </li>
        )))}</ul>
        </section>
    )
}