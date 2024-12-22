/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";
import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/get_products";

const Pagination = ({ updateOrder, updateCategory }) => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.getProducts);

  return (
    <div className="Pagination">
      {new Array(5).fill(0).map((_, index) => (
        <Button
          isDisabled={products.currentPage == index + 1 ? true : false}
          colorScheme={"pink"}
          key={index}
          onClick={() => {
            dispatch(getProducts(index + 1, "default", "default"));
            updateCategory("default");
            updateOrder("default");
          }}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
