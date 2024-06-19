// Packages
import React from "react";

// Components
import { Box, Image } from "@chakra-ui/react";

// Assets
import PassportPic from "../assets/passport_size_pic.png";

const About = () => {
  return (
    <div className="About" id="about">
      <p className="Heading">About Me</p>

      <Box>
        <Image src={PassportPic} alt="Image" />

        <Box>
          <p className="Mern">
            My name is Saurav Kashyap and{" "}
            <span>I'm a MERN Stack Developer</span>
          </p>

          <br />

          <p>
            An <strong>experienced</strong>, hard-working, and Stack Developer
            with proficiency in MongoDB, Express. ambitious Full js, React.js,
            Node.js, Redux, RESTful APIs, and Git. Having a problem solving
            mindset, and 1200+ hours of hands on experience on developing fully
            functional Full Stack website. Looking forward to working as a
            developer and competent employee in an exciting tech company.
          </p>
        </Box>
      </Box>
    </div>
  );
};

export default About;