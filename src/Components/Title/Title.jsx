import "./Title.css";

export const Title = ({ subtitle, title }) => {
  return (
    <section className="title-container">
      <p className="subtitle">{subtitle}</p>
      <h2 className="title">{title}</h2>
    </section>
  );
};
