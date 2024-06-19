// Packages
import React from "react";

// Components
import { Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Assets
import Walmart from "../assets/walmart.png";
import YouTube from "../assets/youtube.png";

const Projects = () => {
  return (
    <div className="Projects" id="projects">
      <p className="Heading">Projects</p>
      <div>
        <div className="IndPro">
          <Image src={Walmart} alt="Image" />

          <p>
            <strong>Walmart Clone</strong>
          </p>

          <p>
            Walmart is an e-commerce application where the user can buy products
            of various categories.
          </p>
          <br />

          <p>
            <strong>TechStack</strong>: HTML5 | CSS3 | JavaScript | React |
            Redux | ChakraUI | Node | Express | MongoDB
          </p>

          <div className="Buttons">
            <Button colorScheme="facebook">
              <Link
                to={
                  "https://github.com/masai-course/saurav_kashyap_cap06_007/tree/master/Walmart"
                }
                target="_blank"
              >
                Git Repo
              </Link>
            </Button>

            <Button colorScheme="green">
              <Link to={`https://666d569e7b5d7fa16f25ee78--clever-biscuit-7213f5.netlify.app/`} target="_blank">
                Deployed App
              </Link>
            </Button>
          </div>
        </div>

        <div className="IndPro">
          <Image src={YouTube} alt="Image" />

          <p>
            <strong>YouTube Clone</strong>
          </p>

          <p>
            YouTube is a social media application where the user can watch
            videos of various categories.
          </p>

          <br />

          <p>
            <strong>TechStack</strong>: HTML5 | CSS3 | JavaScript | React |
            Redux | ChakraUI | Node | Express | MongoDB
          </p>

          <div className="Buttons">
            <Button colorScheme="facebook">
              <Link
                to={
                  "https://github.com/masai-course/saurav_kashyap_cap06_007/tree/master/YouTube%20Clone/youtube-clone"
                }
                target="_blank"
              >
                Git Repo
              </Link>
            </Button>

            <Button colorScheme="green">
              <Link
                to={`https://youtube-clone-kashyap.netlify.app/`}
                target="_blank"
              >
                Deployed App
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
