import { useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import Footer from "../components/Footer";

function Home() {
  const countriesRef = useRef(null);

  return (
    <div>
      <Header />
      <Hero countriesRef={countriesRef} />
      <img alt="wave" src="/img/wave.svg" className="w-100 mb-5" />
      <HomeCards countriesRef={countriesRef} />
      <Footer />
    </div>
  );
}

export default Home;