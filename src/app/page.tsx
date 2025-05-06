import DesignPhilosophy from "./_components/CardSection";
import Hero from "./_components/Hero";
import InfiniteImageSlider from "./_components/ImageSlider";
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
    </div>
  );
}
