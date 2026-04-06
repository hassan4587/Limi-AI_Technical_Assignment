export const validateStockUpdate = (req, res, next) => {
  const updates = req.body;

  if (!Array.isArray(updates) || updates.length === 0) {
    return res.status(400).json({ error: "Request must be a non-empty array" });
  }

  for (const item of updates) {
    if (
      !item.productId ||
      typeof item.quantity !== "number" ||
      item.quantity <= 0
    ) {
      return res.status(400).json({
        error: "Each item must have valid productId and positive quantity",
      });
    }
  }

  next(); // move to controller
};
