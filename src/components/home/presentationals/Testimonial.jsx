import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { customerTestimonials } from "../../../features/data";
import { getStars } from "../../../features/utilities";

export const TestimonialSlider = () => {
  const x = useMotionValue(0);
  const trackRef = useRef(null);
  const speed = -40; // px per second scroll speed
  let animationControls = useRef(null);

  const startAutoScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    animationControls.current = animate(x, -totalWidth, {
      duration: totalWidth / Math.abs(speed),
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0
    });
  };

  const stopScroll = () => {
    if (animationControls.current) {
      animationControls.current.stop();
    }
  };

  const moveManually = (direction) => {
    stopScroll();
    x.set(x.get() + direction * 300); // move 300px by click
    startAutoScroll();
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopScroll();
  }, []);

  const duplicated = [...customerTestimonials, ...customerTestimonials];

  return (
    <section className="testimonial-section">
      <h3>OUR HAPPY CUSTOMERS</h3>
      {/* Navigation */}
      <button className="nav-btn left" onClick={() => moveManually(1)}>
        ❮
      </button>
      <button className="nav-btn right" onClick={() => moveManually(-1)}>
        ❯
      </button>

      <div className="testimonial-slider">
      
        <motion.div className="testimonial-track" ref={trackRef} style={{ x }}>
          {duplicated.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p className="rating">
                {getStars(t.rating).map((star, idx) => (
                  <img key={idx} src={star} alt="star" className="star-icon" />
                ))}
              </p>
              <p className="name">
                {t.name}
                <img src="resources/Vectorcheck.png" alt="verified" />
              </p>
              <p className="message">"{t.message}"</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
