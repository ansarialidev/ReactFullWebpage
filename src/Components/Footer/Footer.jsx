import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer container">
      <p>© {new Date().getFullYear()} SkillMentor . All rights reserved.</p>
      <ul>
        <li>Terms of service</li>
        <li>Privacy Policy</li>
        <li>Design and Developed by Ansari Ali</li>
      </ul>
    </footer>
  );
};
