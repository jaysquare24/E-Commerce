// TestimonialSlider.jsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { customerTestimonials } from '../../features/data';

export const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState(customerTestimonials.slice(0, 3));
  const [fadeOutIndex, setFadeOutIndex] = useState(0); // Index to remove
  const [incomingIndex, setIncomingIndex] = useState(3); // Index to add
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        const updated = [...testimonials];
        updated[fadeOutIndex] = customerTestimonials[incomingIndex % customerTestimonials.length];
        setTestimonials(updated);
        setFadeOutIndex((prev) => (prev + 1) % 3);
        setIncomingIndex((prev) => prev + 1);
        setIsAnimating(false);
      }, 600); // Duration of exit animation
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials, fadeOutIndex, incomingIndex]);

  return (
    <section className="testimonial-slider-container">
      {testimonials.map((testimonial, index) => (
        <div className="testimonial-wrapper" key={testimonial.name + index}>
          <AnimatePresence>
            {(!isAnimating || fadeOutIndex !== index) ? (
              <motion.div
                className="testimonial-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
              >
                <p className="message">"{testimonial.message}"</p>
                <h4 className="name">{testimonial.name}</h4>
                <p className="location">{testimonial.location}</p>
                <p className="rating">⭐ {testimonial.rating}</p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
};