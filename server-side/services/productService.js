import mongoose from "mongoose";
import Product from "../models/Product.js";

export const bulkUpdateStockService = async (updates) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    for (const { productId, quantity } of updates) {
      //  Fetch product inside transaction
      const product = await Product.findById(productId).session(session);

      if (!product) {
        throw new Error(`Product not found: ${productId}`);
      }

      //  Business rule: prevent overselling
      if (product.stock < quantity) {
        throw new Error(`Insufficient stock for ${product.name}`);
      }

      // Update stock
      product.stock -= quantity;

      await product.save({ session });
    }

    await session.commitTransaction();

    return {
      success: true,
      message: "Stock updated successfully",
    };
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession(); // always runs
  }
};
