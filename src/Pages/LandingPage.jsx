
import Cta from "../Components/Cta";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import VideAbout from "../Components/VideAbout";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <VideAbout/>
      <Cta />
      <Footer />
    </div>
  );
};

export default LandingPage;