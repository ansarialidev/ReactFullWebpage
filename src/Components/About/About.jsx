import "./About.css";
import about from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

export const About = () => {
  return (
    <section className="about-container">
      <div className="about-left">
        <img src={about} className="about-img" alt="" />
        <img src={play_icon} className="play-icon" alt="" />
      </div>
      <div className="about-right">
        <h3>Who We Are</h3>
        <h2>Empowering Students with Quality Education</h2>
        <p>
          At SkillMentor, we are dedicated to providing top-notch educational
          programs that help students achieve academic and professional success.
          Our courses are designed by experts to ensure effective learning and
          skill development. We believe that education should be accessible,
          engaging, and career-oriented. Our platform offers interactive
          lessons, real-world projects, and personalized mentorship to help
          learners build confidence and expertise in their chosen fields.
          Whether you're a beginner looking to start your journey or a
          professional aiming to enhance your skills, SkillMentor is here to
          support you every step of the way. Join us and be a part of a
          community that values growth, innovation, and lifelong learning.
        </p>
      </div>
    </section>
  );
};
