import express from "express";
import Product from "../models/Product.js";
import { bulkUpdateStock } from "../controllers/productsController.js";
const router = express.Router();

// Create product
router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

// Get all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

//bulk update stock
router.post("/bulk-update-stock", bulkUpdateStock);

export default router;
