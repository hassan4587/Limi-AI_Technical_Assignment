const { calculateDiscount } = require("../utils/calculateDiscount");
describe("calculateDiscount", () => {
  test("should apply discount", () => {
    expect(calculateDiscount(100, 10)).toBe(90);
  });

  test("zero discount", () => {
    expect(calculateDiscount(100, 0)).toBe(100);
  });

  test("100% discount", () => {
    expect(calculateDiscount(100, 100)).toBe(0);
  });

  test("negative discount throws error", () => {
    expect(() => calculateDiscount(100, -10)).toThrow();
  });
});
