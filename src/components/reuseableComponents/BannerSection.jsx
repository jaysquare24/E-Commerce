import React from "react";
import { Link } from "react-router-dom";

 export const BannerSection = ({
  imageSrc,
  heading,
  subheading,
  tagline,
  buttonText,
  linkText,
  linkTo = "/shop",
  onClickhandler,
  className = "",
}) => {
  return (
    <section className={`banner ${className}`} role="banner">
      <img
        src={imageSrc}
        alt="banner background image"
        className="background-img"
        loading="lazy"
      />

      <div className="banner-overlay">
        {heading && <h2>{heading}</h2>}
        {subheading && <h3>{subheading}</h3>}
        {tagline && <h4>{tagline}</h4>}

        {linkText ?  (
          <Link to={linkTo} className="banner-button">
            {linkText}
          </Link>
        ):(
          <button className="banner-button"
            onClick={onClickhandler}
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};


