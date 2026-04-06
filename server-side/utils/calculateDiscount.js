const calculateDiscount = (price, discountPercent) => {
  if (discountPercent < 0) {
    throw new Error("Discount cannot be negative");
  }

  return price - (price * discountPercent) / 100;
};

module.exports = { calculateDiscount };
