// Components
import { Flex } from "@chakra-ui/react";
import { Link } from "react-scroll";

// Assets
import Resume from "../assets/Saurav_Kashyap_Resume.pdf";

const NavLinks = () => {
  return (
    <>
      <Flex
        fontSize={["12px", "13px", "20px"]}
        display={["none", "none", "flex"]}
      >
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
    </>
  );
};

export default NavLinks;
