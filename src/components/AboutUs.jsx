import { BannerSection } from "./reuseableComponents/BannerSection"

export const AboutUs = () => { 
  return(
  <main className="about-us">
    <BannerSection
      imageSrc="/resources/african-couple-model.jpg"
      heading="About Us"
      subheading="Get to Know Jay Elegant Fashion Store"
      tagline="(Where Fashion Meets Confidence)"
      linkText="Shop Now"
    />
    <section className="summary-section">
      <p className="summary-message"> At Jay Elegant Fashion, we’re passionate about helping you look and feel your best. Whether you're a reseller, boutique owner, a fashion-forward business, or end user. We offer stylish, high-quality fashion essentials at unbeatable wholesale prices. From everyday wear to standout pieces, our curated collections are designed to elevate your inventory and your brand.</p>
    </section>
    <section className="aboutUs-details">
      <div className="section-image-container">
      <img
        src="resources/fashion-stylish-beautiful-young-brunette-woman-model-summer-hipster-colorful-casual-clothes-posing-street-background.jpg"
        alt="product background image"
        className="section-image"
      />
      </div>
      <div className="aboutUs-details-item2">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>To empower retailers with access to affordable, premium fashion backed by reliable service and lasting partnerships.</p>
        </div>
        <div className="values">
          <h3>Our Values</h3>
          <p><span>Integrity:</span>We do what’s right, always. Honesty and transparency guide every decision we make. </p>
          <p><span>Customer First:</span>Your success is our priority. We’re here to support your goals at every step.</p>
          <p><span>Creativity:</span> We believe fashion is art. Our collections celebrate individuality, trends, and self-expression.</p>
          <p><span>Reliability:</span>From timely deliveries to consistent quality, we’re a partner you can depend on.</p>
        </div> 
      </div>
    </section>
    <section className="aboutUs-details middle">
      <div className="aboutUs-details-item2">
        <h3>What Sets Us Apart</h3>
        <div>
          <h5>Quality You Can Trust</h5>
          <p>Every piece is handpicked and quality-checked to exceed expectations because your brand deserves the best. </p>
        </div>
        <div>
          <h5>Competitive Pricing</h5>
          <p>Fashion shouldn’t cost a fortune. Our wholesale pricing helps you stay profitable without compromising on style. </p>
        </div>
        <div>
          <h5>Exceptional Service</h5>
          <p>Our support team is responsive, knowledgeable, and ready to assist—so you can focus on growing your business. </p>
        </div>
      </div> 
      <div className="section-image-container">
      <img
        src="resources/african-american-man-model.jpg"
        alt="product background image"
        className="section-image"
      />
      </div>
    </section>
    <section className="aboutUs-details">
      <div className="section-image-container">
        <img
          src="resources/mixed-woman-with-hairs-having-fun-smiling-posing-outdoor-wood-urban-wall.jpg"
          alt="product background image"
          className="section-image"
        />
      </div>
      <div className="aboutUs-details-item2">
        <h3>Why Choose Jay Elegant Fashion</h3>
        <p>When you choose Jay Elegant Fashions, you're choosing more than just products you're joining a community of fashion retailers who value integrity, affordability, and a flawless customer experience.</p>
        <p>Start your journey with us today and discover a wholesale fashion experience tailored to your success.</p>
      </div>
    </section>
  </main>
  )
}