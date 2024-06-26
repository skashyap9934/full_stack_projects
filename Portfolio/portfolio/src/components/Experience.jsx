// Packages
import React from "react";

// Components
import { Image } from "@chakra-ui/react";

// Assets
import CapgeminiLogo from "../assets/capgeminiLogo.svg";

const Experience = () => {
  return (
    <div className="Experience" id="experience">
      <p className="Heading">Experience</p>

      <div>
        <p>
          <strong>Job Title</strong> - Analyst, Software Engineer
        </p>

        <p>
          <strong>Company Name</strong> - Capgemini
        </p>

        <p>
          <strong>Location</strong> - Bangalore, India
        </p>

        <p>
          <strong>Period</strong> - APR 2023 - Present
        </p>

        <p className="Description">
          <strong>Description</strong>
        </p>

        <ul className="JobDesc">
          <li>Worked as Windows Administrator</li>
          <li>Created Active Directory</li>
          <li>Allowing and denying the access to the user</li>
          <li>Authenticating the user</li>
          <li>Authorizing the user</li>
        </ul>

        <Image className="CompanyLogo" src={CapgeminiLogo} alt="Logo" />
      </div>
    </div>
  );
};

export default Experience;
