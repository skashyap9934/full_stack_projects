/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Navbar from "../components/CommonComponents/Navbar";
import { Link } from "react-router-dom";
import ShopBodyLeft from "../components/ShoppingPage/ShopBodyLeft";
import ShoppingBodyRight from "../components/ShoppingPage/ShoppingBodyRight";
import Footer from "../components/CommonComponents/Footer";
import Pagination from "../components/ShoppingPage/Pagination";
import { getProducts } from "../redux/actions/get_products";

const Shopping = () => {
  const [category, setCategory] = React.useState("default");
  const [order, setOrder] = React.useState("default");
  const updateCategory = (category) => setCategory(category);
  const updateOrder = (order) => setOrder(order);
  const dispatch = useDispatch();
  const products = useSelector((store) => store.getProducts);

  useEffect(() => {
    dispatch(getProducts(1, category, order));
  }, [category, order]);

  return (
    <div className="Shopping">
      <Navbar />

      <Flex className="ShopFlexBox">
        <Image
          src="https://i5.walmartimages.com/dfw/4ff9c6c9-3e10/k2-_79de0e38-c1fa-4fdf-9636-6e588be9fcb1.v1.jpg"
          alt="image"
        />

        <Box>
          <Text>Gifts that are SO Mom</Text>
          <Text>The perfect present totally exists.</Text>
          <Link>Shop all</Link>
        </Box>
      </Flex>

      <Box className="ProdContainer">
        <ShopBodyLeft
          category={category}
          updateCategory={updateCategory}
          order={order}
          updateOrder={updateOrder}
        />
        <ShoppingBodyRight products={products} />
      </Box>

      <Pagination updateOrder={updateOrder} updateCategory={updateCategory} />
      <Footer />
    </div>
  );
};

export default Shopping;
