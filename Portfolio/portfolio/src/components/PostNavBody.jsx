// Packages
import React, { useEffect, useState } from "react";

// Components
import { Button, Image } from "@chakra-ui/react";
import { Link } from "react-scroll";

// Assets
import ProfilePic from "../assets/passport_size_pic.png";
import Resume from "../assets/Saurav_Kashyap_Resume.pdf";

const PostNavBody = () => {
  // Hooks for changing the state of the flag
  let [flag, setFlag] = useState(true);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setFlag(!flag);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [flag]);

  return (
    <div className="PostNavBody" id="postnav">
      <div className="Details">
        <p className="Name">
          My name is <span>Saurav Kashyap</span>
        </p>

        <p className="Tech">
          I'm a <span>{flag ? "Full Stack Developer" : "Problem Solver"}</span>
        </p>

        <p>
          <i className="fa-solid fa-location-dot"></i> Whitefield, Bangalore,
          Karnataka, 560066
        </p>

        <Button colorScheme="blue">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Contact Me
          </Link>
        </Button>

        <Button ml={5} colorScheme="red">
          <a href={Resume} download>
            Download Resume
          </a>
        </Button>
      </div>
      <Image src={ProfilePic} alt="Image" />
    </div>
  );
};

export default PostNavBody;
