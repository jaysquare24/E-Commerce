import { WelcomeBanner } from "../presentationals/WelcomeBanner";
import { TestimonialSlider } from "../presentationals/Testimonial";
import { Brands } from "../presentationals/Brands";
import { NewArrival } from "../presentationals/NewArrival";
import { TopSelling } from "../presentationals/TopSelling";
import { BrowseStyle } from "../presentationals/BrowseStyle";
import { Category } from "../presentationals/Category";

export const Home = () => {
  return (
    <main>
      <WelcomeBanner />
      <Brands/>
      <NewArrival/>
      <TopSelling/>
      <BrowseStyle/>
      <Category/>
      <TestimonialSlider/>
    </main>
  );
};