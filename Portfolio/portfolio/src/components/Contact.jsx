// Packages
import React from "react";

// Components
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="Contact" id="contact">
      <p className="Heading">Contact Me</p>

      <ul>
        <li style={{ marginBlockEnd: "1rem", color: "red" }}>
          <i className="fa-solid fa-location-dot"></i> Whitefield, Bangalore,
          Karnataka, 560066
        </li>

        <li>
          <i className="fa-solid fa-envelope"></i>
          <Link to="mailto:example@example.com">Mail Me</Link>
        </li>

        <li>
          <i className="fa-solid fa-phone"></i>
          <Link to="tel:9135655507">Call Me</Link>
        </li>

        <li>
          <i className="fa-brands fa-linkedin"></i>
          <Link
            variant="ghost"
            to="https://www.linkedin.com/in/saurav-kashyap/"
            target="_blank"
          >
            Linked In
          </Link>
        </li>

        <li>
          <i className="fa-brands fa-github"></i>
          <Link
            to="https://github.com/kashyapsaurav/kashyapsaurav"
            target="_blank"
          >
            Github
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
