import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="container">
      <h1>SkillMentor</h1>
      <ul className="nav-list">
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonial</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};
