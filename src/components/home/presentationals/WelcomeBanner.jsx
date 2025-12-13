import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { bannerImages } from '../../../features/data';

export const WelcomeBanner = () => {
  
  return (
    <section className="welcome-banner" role='banner'>
      <img
        src="resources/Rectangle2.png"
        alt="fashion banner background"
        className="background-img"
      />
      <div className="overlay">
        <img src="resources/Vector1.svg" alt='background styling' className='firstStar'/>
        <img src='resources/Vector.svg' alt='background styling' className='secondStar'/>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
         FIND CLOTHES THAT MATCHES YOUR STYLE
        </motion.h1>
        <motion.h4
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.65, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
         Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </motion.h4>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link to="/shop" className="shop-button">
            Shop Now
          </Link>
        </motion.div>

        <motion.div
          initial={{opacity:0, x:-30}}
          animate={{opacity:1, x:0}}
          transition={{duration:1, delay:1.2}}
          className="stats">
          <div>
            <p>200+</p>
            <p>International Brands</p>
          </div>

          <div>
            <p>2,000+</p>
            <p>High-Quality Products</p>
          </div>

          <div>
            <p>30,000+</p>
            <p>Happy Customers</p>
          </div>
        </motion.div>
      </div>
      <div className="wlc-banner-image-container">
       <img src ="resources/Rectangle1.png" alt='welcome banner image' className='wlc-banner-image'/>
      </div>
    </section>
  );
};


