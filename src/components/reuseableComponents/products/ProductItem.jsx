import { Label } from '../Label.jsx';
import { Link } from 'react-router-dom';


export function ProductItem({ item }) {
  
  const { id, name, img } = item;

  const imgSrc = Array.isArray(img)? img[0] : img;
 

  return (
    <>
      <li className="item">
        <Link to={`/product/${id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
        <div className="inventoryImage-container">
          <img src={imgSrc} alt={name} loading='lazy'/>
          <span className="quick-view-button">
            View Product
          </span>
        </div>
        </Link>
        <Label item={item}/>
      </li>
    </>
  );
}
