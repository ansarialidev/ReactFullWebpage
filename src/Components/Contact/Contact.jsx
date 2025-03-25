import "./Contact.css";
import mail from "../../assets/mail-icon.png";
import phone from "../../assets/phone-icon.png";
import location from "../../assets/location-icon.png";
import { useState } from "react";

export const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "fa3d329f-a83e-4d2f-b32e-b88452a7a73f");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact">
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>
          Feel free to send a message if you have any questions, suggestions, or
          need assistance with anything. We’re here to help and would love to
          hear from you. Whether it’s feedback, inquiries, or collaboration
          opportunities, just drop us a message, and we’ll get back to you as
          soon as possible!
        </p>
        <ul className="contact-ul">
          <li>
            <img src={mail} alt="mail" />
            <span>ansariali.developer@gmail.com</span>
          </li>
          <li>
            <img src={phone} alt="" />
            <span>9990970056</span>
          </li>
          <li>
            <img src={location} alt="" />
            <span>Mumbai Maharastra</span>
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="username"
            placeholder="Enter your name..."
            autoComplete="off"
            required
          />
          <label>Phone Number: </label>
          <input
            type="tel"
            placeholder="Enter your Number..."
            autoComplete="off"
            required
            name="phoneNumber"
          />
          <label>Message: </label>
          <textarea
            name="message"
            id="message"
            rows={7}
            placeholder="Enter your message..."
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit
          </button>
        </form>
        <span>{result}</span>
      </div>
    </section>
  );
};
