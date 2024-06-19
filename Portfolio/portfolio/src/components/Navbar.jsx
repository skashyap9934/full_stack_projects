// Packgaes
import React from "react";

// Components
import { Flex, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-scroll";

// Assets
import ProfilePic from "../assets/MyPic.jpg";
import Resume from "../assets/SauravKashyap_FSD.pdf";

const Navbar = () => {
  return (
    <Flex className="Navbar">
      <Flex>
        <Image src={ProfilePic} alt="ProfilePic" />
        <Heading as={"h3"}>Saurav Kashyap</Heading>
      </Flex>

      <Flex>
        <Link
          to="postnav"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          Home
        </Link>

        <Link to="about" spy={true} smooth={true} offset={-150} duration={500}>
          About
        </Link>

        <Link to="skills" spy={true} smooth={true} offset={-60} duration={500}>
          Skills
        </Link>

        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          Projects
        </Link>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          Contacts
        </Link>

        <a href={Resume} download>
          Resume
        </a>
      </Flex>
    </Flex>
  );
};

export default Navbar;
