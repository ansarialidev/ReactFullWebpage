import { useState } from "react";
import "./Navbar.css";
import { useEffect } from "react";
import { Link } from "react-scroll";
import { TbMenuDeep } from "react-icons/tb";

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavbar = () => {
    setShowNavbar((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky && "dark-nav"}`}>
      <h1 className="skillmentor">SkillMentor</h1>
      <ul className={showNavbar ? "nav-mobile" : "nav-list"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-245} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about-container" smooth={true} offset={-109} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-195} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-145}
            duration={500}
            className="btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <div className="menu-bar">
        <p onClick={handleNavbar}>
          <TbMenuDeep />
        </p>
      </div>
    </nav>
  );
};
