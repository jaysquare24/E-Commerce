import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectInventory, loadData } from '../../features/inventorySlice';
import { selectSearchTerm } from '../../features/searchTermSlice';
import { InventoryList } from './InventoryList';

export const Inventory = () => {
  const inventory = useSelector(selectInventory);
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    dispatch(loadData());

    // Simulate async loading (remove setTimeout in real async code)
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [dispatch]);

  const filteredInventory = inventory.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return( 
    <section className='inventory-section'>
      <InventoryList items={filteredInventory} loading={loading} />
    </section>
  );
};