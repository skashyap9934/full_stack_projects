/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import ProductCard from "./ProductCard";
import { Box, Text, Image } from "@chakra-ui/react";

const ShoppingBodyRight = ({ products }) => {
  if (products.loading)
    return (
      <Image
        src="https://media.tenor.com/XK37GfbV0g8AAAAj/loading-cargando.gif"
        alt="loading-image"
        display={"flex"}
        margin={"auto"}
        alignItems={"center"}
        justifyContent={"center"}
        marginBlock={"3rem"}
      />
    );

  return (
    <Box className="ShoppingBodyRight" fontFamily={"Poppins"} fontSize={21}>
      <Box>
        <Text>
          <b>Trending products on Walmart</b>
        </Text>
      </Box>

      <div className="GridContainer">
        {products.data.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    </Box>
  );
};

export default ShoppingBodyRight;
