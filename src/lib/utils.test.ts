import { describe, it, expect } from "vitest";
import { formatPrice } from "./utils";

describe("formatPrice", () => {
  it("formats integer price in ARS", () => {
    const result = formatPrice(1299);
    expect(result).toMatch(/1\.299/);
    expect(result).toMatch(/\$/);
  });

  it("omits decimal digits", () => {
    const result = formatPrice(1299.99);
    expect(result).not.toMatch(/,99/);
    expect(result).not.toMatch(/\.99/);
  });

  it("formats zero as $ 0", () => {
    const result = formatPrice(0);
    expect(result).toMatch(/0/);
  });

  it("formats large amounts with thousand separator", () => {
    const result = formatPrice(1000000);
    expect(result).toMatch(/1\.000\.000/);
  });
});
