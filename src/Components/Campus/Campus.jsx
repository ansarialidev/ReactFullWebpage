import "./Campus.css";

import g1 from "../../assets/gallery-1.png";
import g2 from "../../assets/gallery-2.png";
import g3 from "../../assets/gallery-3.png";
import g4 from "../../assets/gallery-4.png";

export const Campus = () => {
  return (
    <section className="campus">
      <div className="gallery">
        <img src={g1} alt="gallery-images" />
        <img src={g2} alt="gallery-images" />
        <img src={g3} alt="gallery-images" />
        <img src={g4} alt="gallery-images" />
      </div>
    </section>
  );
};
