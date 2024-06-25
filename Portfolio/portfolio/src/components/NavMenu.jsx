// Packages
import React from "react";

// Components
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

// Components
import { ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";

const NavMenu = () => {
  return (
    <div className="NavMenu">
      <Menu id="MenuButton">
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />

        <MenuList>
          <MenuItem>
            <Link
              to="postnav"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Home
            </Link>
          </MenuItem>

          <hr />

          <MenuItem>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              About
            </Link>
          </MenuItem>

          <hr />

          <MenuItem>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Skills
            </Link>
          </MenuItem>

          <hr />

          <MenuItem>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Projects
            </Link>
          </MenuItem>

          <hr />

          <MenuItem>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Contacts
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default NavMenu;
