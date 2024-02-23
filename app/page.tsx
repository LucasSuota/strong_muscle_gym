import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import OurApp from "@/components/ourapp/OurApp";
import PricesArea from "@/components/pricesarea/PricesArea";
import Ratings from "@/components/ratings/Ratings";
import SecondHero from "@/components/secondHero/SecondHero";
import WhoAreWe from "@/components/whoarewe/WhoAreWe";
import YouHave from "@/components/youhave/YouHave";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <WhoAreWe />
      <SecondHero />
      <YouHave />
      <OurApp />
      <PricesArea />
      <Ratings />
    </>
  );
};

export default Home;
