/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ShopBodyLeft = ({ category, updateCategory, order, updateOrder }) => {
  return (
    <div className="ShopBodyLeft">
      <Box fontFamily={"Poppins"}>
        <Text>
          <b>Adjust Products</b>
        </Text>

        <form>
          <select
            name="sort"
            id="sort"
            value={order}
            onChange={(event) => updateOrder(event.target.value)}
          >
            <option value="default">Sort by Rating</option>
            <option value="asc">Highest Rating First</option>
            <option value="desc">Lowest Rating First</option>
          </select>
        </form>

        <form>
          <select
            name="filter"
            id="filter"
            value={category}
            onChange={(event) => updateCategory(event.target.value)}
          >
            <option value="default">Filter by Category</option>
            <option value="groceries">Groceries</option>
            <option value="furniture">Furniture</option>
            <option value="fragrances">Fragrances</option>
          </select>
        </form>
      </Box>
    </div>
  );
};

export default ShopBodyLeft;
