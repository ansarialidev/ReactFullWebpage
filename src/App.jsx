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
      </div>
    </>
  );
};
