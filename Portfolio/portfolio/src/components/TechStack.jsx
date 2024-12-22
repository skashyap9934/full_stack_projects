// Packages
import React from "react";

// Components
import { Grid, GridItem, Image } from "@chakra-ui/react";

const TechStack = () => {
  return (
    <div className="TechStack" id="techstack">
      <p className="Heading">Tech stack</p>

      <Grid className="Grid">
        <GridItem>
          <Image
            className="NoRadius"
            src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012011/html5_logo-with-wordmark-01.png?itok=Fq8hmL4Z"
            alt="Image"
          />
          <p>HTML5</p>
        </GridItem>

        <GridItem>
          <Image
            src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042015/css3.png?itok=OlYIVWA0"
            alt="Image"
          />
          <p>CSS3</p>
        </GridItem>

        <GridItem>
          <Image
            src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082014/js1_0.png?itok=9fCD5630"
            alt="Image"
          />
          <p>JavaScript</p>
        </GridItem>

        <GridItem>
          <Image
            className="NoRadius"
            src="https://cdn.worldvectorlogo.com/logos/redux.svg"
            alt="Image"
          />
          <p>Redux</p>
        </GridItem>

        <GridItem>
          <Image
            className="NoRadius"
            src="https://cdn.worldvectorlogo.com/logos/next.svg"
            alt="Image"
          />
          <p>Next.js</p>
        </GridItem>

        <GridItem>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU3g787KO0fRWi-xyLY4MKo1SOqFV8QGK_zW7rhZ_e77FmG9Eh0rP4eMjrAC3smltMSEQ&usqp=CAU"
            alt="Image"
          />
          <p>MongoDB</p>
        </GridItem>

        <GridItem>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTQsenTcQtOr0PJkS8d9HFO0c1nTeQalIZjg&usqp=CAU"
            alt="Image"
          />
          <p>Express.js</p>
        </GridItem>

        <GridItem>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2c0qoEC7svzczLKwul4wz4Fl3LbdwdKn1nA&usqp-CAU"
            alt="Image"
          />
          <p>React.js</p>
        </GridItem>

        <GridItem>
          <Image
            className="NoRadius"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQloVLw6Np0mKJa7JuiTW8owTst6Im5XpTmqQ&usqp=CAU"
            alt="Image"
          />

          <p>Node.js</p>
        </GridItem>
      </Grid>

      <p className="Heading">Tools</p>

      <Grid className="Grid">
        <GridItem>
          <Image
            className="NoRadius"
            src="https://code.visualstudio.com/assets/images/code-stable.png"
            alt="Image"
          />
          <p>VS Code</p>
        </GridItem>

        <GridItem>
          <Image
            className="NoRadius"
            src="https://voyager.postman.com/logo/postman-logo-icon-orange.svg"
            alt="Image"
          />

          <p>Postman</p>
        </GridItem>

        <GridItem>
          <Image
            className="NoRadius"
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            alt="Image"
          />

          <p>Git</p>
        </GridItem>

        <GridItem>
          <Image
            className="NoRadius"
            src="https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png"
            alt="Image"
          />

          <p>Netlify</p>
        </GridItem>
      </Grid>
    </div>
  );
};

export default TechStack;
