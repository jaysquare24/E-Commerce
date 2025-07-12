import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { bannerImages } from '../../features/data';

export const WelcomeBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="welcome-banner" role='banner'>
      <AnimatePresence>
        <motion.img
          key={bannerImages[current]}
          src={bannerImages[current]}
          alt={`Slide ${current + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="background-img"
        />
      </AnimatePresence>

      <div className="overlay">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Welcome to Jay Elegant Fashion Store
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Discover elegant fashion for every moment. Shop our latest collections today.
        </motion.h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link to="/shop" className="shop-button">
            Shop Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};


