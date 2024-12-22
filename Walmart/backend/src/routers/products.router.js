const { Router } = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const productsRouter = Router();

productsRouter.get("/", async (req, res) => {
  const { page, limit, order, category } = req.query;
  const categoryQuery =
    category !== "default" ? { $eq: category } : { $ne: category };

  const collection = mongoose.connection.collection("products");
  const products = await collection
    .find({ category: categoryQuery })
    .skip(Number(page - 1) * Number(limit ?? 6))
    .limit(Number(limit ?? 6))
    .toArray();

  let sortedData = products;
  switch (order) {
    case "desc":
      sortedData = products.sort((a, b) => a.rating - b.rating);
      break;
    case "asc":
      sortedData = products.sort((a, b) => b.rating - a.rating);
      break;
    default:
      sortedData = products;
      break;
  }

  const totalCount = await collection.countDocuments();
  return res.status(200).json({
    products: sortedData,
    category,
    order,
    totalCount,
    limit: Number(limit) || 6,
    page: Number(page) || 1,
  });
});

productsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const collection = mongoose.connection.collection("products");
  const product = await collection.find({ id: Number(id) }).toArray();

  res.status(200).json({ product: product });
});

module.exports = { productsRouter };
