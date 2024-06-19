// Modules
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Variables
const userRouter = require("../src/routers/user.router");
const productsRouter = require("../src/routers/products.router");
const { wishlistsRouter } = require("../src/routers/wishlist.router");
const bagsRouter = require("../src/routers/bags.router");
const app = express();
const PORT = process.env.PORT || 8080;
const corsConfig = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
};

// Middlewares
app.use(express.json());
// app.use(cors(corsConfig));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to HomePage" });
});

// Routes
app.use("/user", userRouter);
app.use("/products", productsRouter);
app.use("/wishlist", wishlistsRouter);
app.use("/bag", bagsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

// module.exports = app;
