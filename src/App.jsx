import { About } from "./Components/About/About";
import { Campus } from "./Components/Campus/Campus";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { Hero } from "./Components/HeroSection/Hero";
import { Navbar } from "./Components/Navbar/Navbar";
import { Program } from "./Components/Program/Program";
import { Title } from "./Components/Title/Title";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our Program" title="What we Offer" />
        <Program />
        <About />
        <Title subtitle="Gallery" title="Campus Photo" />
        <Campus />
        <Title subtitle="Contact us" title="Get in Touch" />
        <Contact />
      </div>
      <Footer />
    </>
  );
};
