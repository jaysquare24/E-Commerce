import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectInventory, loadData } from '../../features/inventorySlice';
import { InventoryList } from './InventoryList';
import { Outlet } from "react-router-dom";

export const Inventory = () => {
  const inventory = useSelector(selectInventory);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    dispatch(loadData());

    // Simulate async loading (remove setTimeout in real async code)
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [dispatch]);

  return( 
    <section className='inventory-section'>
      <InventoryList items={inventory} loading={loading} />
      <Outlet/>
    </section>
  );
};