import { InventoryItem } from './InventoryItem';

export function InventoryList({ items, loading }) {
  // If items is undefined/null, don't render anything (or show a spinner) 
  if (loading) {
    return (
      <div className="inventory-loading">
        <img src='/resources/icons8-loading-circle.gif' alt='loading products'/>
      </div>
    );
  }
  // If items is defined and empty, show the error
  if (items.length === 0) {
    return (
      <div className="inventory-empty">
        <p role="alert">Sorry, no products are currently available.</p>
      </div>
    );
  }

  // Otherwise, render the inventory
  return (
    <ul className="products-container" aria-label="Available products">
      {items.map((item) => (
        <InventoryItem key={item.name} item={item} />
      ))}
    </ul>
  );
}