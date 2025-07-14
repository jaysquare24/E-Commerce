import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../features/cartSlice.js';
import { getCurrencySymbol, calculatePrice } from '../../features/utilities.js';
import { selectCurrencyFilter } from '../../features/currencyFilterSlice.js';
import { Modal } from '../Modal.jsx';

export function InventoryItem({ item }) {
  const dispatch = useDispatch();
  const currencyFilter = useSelector(selectCurrencyFilter);
  const [showItemModal, setShowItemModal] = useState(false);
    
  const { price, name, img } = item;
  const displayPrice = calculatePrice(price, currencyFilter);

  const onShowItemModal = () => {
    setShowItemModal(true);
  };

  const onCloseItemModal = () => {
    setShowItemModal(false);
  };

  const onClickHandler = () => {
    dispatch(addItem(item));
  };

  return (
    <>
      <li className="item" key={name}>
        <button className="inventoryImage-container" onClick={onShowItemModal}>
          <img src={img} alt={name}/>
          {/* Quick view button overlay */}
          <span
            className="quick-view-button"
            onClick={(e) => {
              e.stopPropagation(); // Prevent modal from opening twice
              onShowItemModal();
            }}
          >
            Quick View
          </span>
        </button>
        <h3 className='product-name'>{name}</h3>
        <h3 className="price">
          {getCurrencySymbol(currencyFilter)}
          {Number(displayPrice).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}{' '}
          {currencyFilter}
        </h3>
        <button onClick={onClickHandler} className="add-to-cart-button">
          Add to Cart
        </button>
      </li>

      {showItemModal && (
        <Modal open={true} >
          <div id="product-modal">
            <div className='productModal-image-container' >
            <img src={img} alt={name} />
            </div>
            <div className='productModal-content'>
              <h2>{name}</h2>
              <h3 className="price">
                {getCurrencySymbol(currencyFilter)}
                {Number(displayPrice).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{' '}
                {currencyFilter}
              </h3>
              <button className="add-to-cart-button" onClick={onClickHandler}>Add to Cart</button>
              <button className='cancel-button' onClick={onCloseItemModal}>X</button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
