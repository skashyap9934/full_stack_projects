/* eslint-disable no-unused-vars */

// Packgaes
import React, { useContext } from "react";

// Components
import { Flex, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-scroll";

// Assets
import ProfilePic from "../assets/MyPic.jpg";
import Resume from "../assets/SauravKashyap_FSD.pdf";
import { MyThemeContext } from "../context/ThemeContextProvider";

const Navbar = () => {
  const { theme, setTheme } = useContext(MyThemeContext);

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

      <i
        className={`fa-solid fa-moon`}
        onClick={() =>
          theme === "white-mode"
            ? setTheme("dark-mode")
            : setTheme("white-mode")
        }
      ></i>
    </Flex>
  );
};

export default Navbar;
