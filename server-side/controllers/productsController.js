import { bulkUpdateStockService } from "../services/productService.js";

export const bulkUpdateStock = async (req, res) => {
  try {
    const result = await bulkUpdateStockService(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
