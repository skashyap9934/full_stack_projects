/* eslint-disable no-unused-vars */

// Packgaes
import React, { useContext } from "react";

// Components
import { Flex, Heading, Image } from "@chakra-ui/react";

// Assets
import ProfilePic from "../assets/MyPic.jpg";
import { MyThemeContext } from "../context/ThemeContextProvider";
import NavMenu from "./NavMenu";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { theme, setTheme } = useContext(MyThemeContext);

  return (
    <Flex className="Navbar">
      <Flex>
        <Image src={ProfilePic} alt="ProfilePic" />
        <Heading fontSize={{ base: "27px", md: "17px", lg: "30px" }} as={"h3"}>
          Saurav Kashyap
        </Heading>
      </Flex>

      <NavLinks />

      <Flex gap={5}>
        <NavMenu />
        <i
          className={`fa-solid fa-moon`}
          onClick={() =>
            theme === "white-mode"
              ? setTheme("dark-mode")
              : setTheme("white-mode")
          }
        ></i>
      </Flex>
    </Flex>
  );
};

export default Navbar;
