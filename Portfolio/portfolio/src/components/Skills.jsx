// Packages
import React from "react";

// Components
import { Box } from "@chakra-ui/react";

const Skills = () => {
  return (
    <div className="Skills" id="skills">
      <p className="Heading">Skills</p>

      <Box>
        <Box className="SkillSec">
          <i className="fa-brands fa-react"></i>
          <p>Front-End</p>

          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>ChakraUI</li>
            <li>Redux</li>
          </ul>
        </Box>

        <Box className="SkillSec">
          <i className="fa-brands fa-node-js"></i>
          <p>Back-End</p>
          <ul>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Node.js</li>
            <li>RESTful API</li>
            <li>NPM</li>
          </ul>
        </Box>

        <Box className="SkillSec">
          <i className="fa-solid fa-database"></i>
          <p>DSA</p>

          <ul>
            <li>String</li>
            <li>Array</li>
            <li>Objects</li>
            <li>Recursion</li>
            <li>Stack</li>
            <li>Queue</li>
          </ul>
        </Box>
      </Box>
    </div>
  );
};

export default Skills;
