const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById
} = require("../controller/productControllers");

//GET all products from the database
router.get("/", getAllProducts);

//GET a product from the database using its id
router.get("/:id", getProductById);

module.exports = router;
