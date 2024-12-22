// Packages
import React from "react";

// Components
import { Box, Image } from "@chakra-ui/react";

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
          <li>
            Developed hassle-free UI for the BOTS using ReactJS to showcase the
            statistics of several parameters to the client.
          </li>
          <li>
            Deployed the same BOTS which are being used by thousands of clients.
          </li>
          <li>Provided on-call support to the clients whenever needed.</li>
          <li>
            Worked with the cross-functional teams to have smooth flow to get
            the BOTS parameters whenever needed and deployed the same on time
            and as per the demand.
          </li>
        </ul>

        <Image className="CompanyLogo" src={CapgeminiLogo} alt="Logo" />
      </div>

      <Box mt="1rem">
        <p>
          <strong>Title</strong> - MERN Stack Student
        </p>
        <p></p>
        <strong>Company Name</strong> - Masai School
        <p>
          <strong>Location</strong> - Bangalore, India
        </p>
        <p className="Description">
          <strong>Description</strong>
        </p>
        <ul className="JobDesc">
          <li>
            Developed and maintained full-stack web applications using the MERN
            stack (MongoDB, ExpressJS, ReactJS, and NodeJS)
          </li>
          <li>
            Collaborated with team members to design and implement new features,
            ensuring responsiveness and cross-browser compatibility.
          </li>
          <li>
            Conducted debugging to enhance application performance and user
            experience.
          </li>
        </ul>
        <Image
          className="CompanyLogo"
          src={
            "https://cdn.masaischool.com/masai-website/Masai_Logo_dark_web_b21aab8c62.webp"
          }
          alt="Logo"
        />
      </Box>
    </div>
  );
};

export default Experience;
