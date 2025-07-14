import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectInventory, loadData } from '../../features/inventorySlice';
import { InventoryList } from '../inventory/InventoryList';
import { useParams, useNavigate } from 'react-router-dom';
import { BannerSection } from '../BannerSection';

export const SearchItem = () => {
  const inventory = useSelector(selectInventory);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { value } = useParams();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    dispatch(loadData());

    // Simulate async loading (remove setTimeout in real async code)
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [dispatch]);
  
  const filteredInventory = inventory.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  const goBack = () => {
  navigate(-1)
  }

  return( 
  <main>
    <BannerSection
      imageSrc= "/resources/joyful-young-attractive-happy-african-american-couple.jpg"
      subheading={`Search Result For "${value}"`}
      tagline="Enjoy shopping our elegant fashion wears"
      onClickhandler={goBack}
      buttonText="Go Back"
    />

    <section className='inventory-section'>
    <InventoryList items={filteredInventory} loading={loading} />
    </section>
  </main>
 );
}