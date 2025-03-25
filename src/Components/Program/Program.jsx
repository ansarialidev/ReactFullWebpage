import "./Program.css";

import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";

import cap1 from "../../assets/program-icon-1.png";
import cap2 from "../../assets/program-icon-2.png";
import cap3 from "../../assets/program-icon-3.png";
export const Program = () => {
  return (
    <section className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={cap1} alt="caption1" />
          <p>Graduate Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={cap2} alt="caption1" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={cap3} alt="caption1" />
          <p>Post Graduate</p>
        </div>
      </div>
    </section>
  );
};
