// Modules
const { Router } = require("express");
const url = require("url");
require("dotenv").config();

// Variables
const connectToDatabase = require("../config/database");
const productsRouter = Router();

// RESTful API's

productsRouter.get("/", async (req, res) => {
  const parsedURL = url.parse(req.url, true);
  const query = parsedURL.query;

  const { page, limit, order, category } = query;

  const categoryQuery = category
    ? { $exists: true, $eq: category }
    : { $exists: true, $ne: category };

  const mongoClient = await connectToDatabase();
  const database = mongoClient.db("walmart");
  const collection = database.collection("products");

  const products =
    (await collection
      .find({ category: categoryQuery })
      .skip(Number(page - 1) * Number(limit || 20))
      .limit(Number(limit || 20))
      .toArray()) || [];

  let sortedData = products;
  if (order) {
    if (order === "asc")
      sortedData = products.sort((a, b) => a.rating - b.rating);
    else sortedData = products.sort((a, b) => b.rating - a.rating);
  }

  if (category)
    sortedData = [...sortedData].filter((data) => (data.category = category));

  const totalCount = await collection.countDocuments();

  return res.status(200).json({
    products: sortedData,
    totalCount,
    limit: Number(limit) || 20,
    page: Number(page) || 1,
  });
});

productsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const mongoClient = await connectToDatabase();
  const database = mongoClient.db("walmart");
  const collection = database.collection("products");

  const product = await collection.find({ id: Number(id) }).toArray();

  res.status(200).json({ product: product });
});

productsRouter.post("/add/:collectionName", async (req, res) => {
  try {
    const product = req.body;
    const { collectionName } = req.params;

    const mongoClient = await connectToDatabase();
    const database = mongoClient.db("walmart");
    const collection = database.collection(collectionName);

    const { id } = product;
    const isExisting = await collection.findOne({ id: parseInt(id) });

    if (isExisting)
      return res.json({ message: `Already in ${collectionName}` });

    const response = await collection.insertOne(product);
    res.json(response);
  } catch (error) {
    throw new Error("Internal Server Error");
  }
});

module.exports = productsRouter;
