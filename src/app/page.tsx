import DesignPhilosophy from "./_components/CardSection";
import Category from "./_components/Category";
import Faq from "./_components/Faq";
import Hero from "./_components/Hero";
import InfiniteImageSlider from "./_components/ImageSlider";
import Location from "./_components/Location";
import PromoSection from "./_components/PromoSection";
import FashionStats from "./_components/Stat";

export default function Home() {
  return (
    <div>
      <Hero/>
      <InfiniteImageSlider/>
      <FashionStats/>
      <DesignPhilosophy/>
      <PromoSection/>
      <Category/>
      <Faq/>
      <Location/>
    </div>
  );
}
