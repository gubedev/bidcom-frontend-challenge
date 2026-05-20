import { describe, it, expect } from "vitest";
import { paths } from "./paths";

describe("paths", () => {
  it("home returns /", () => {
    expect(paths.home.getHref()).toBe("/");
  });

  it("search encodes query term", () => {
    expect(paths.search.getHref("macbook pro")).toBe("/search?s=macbook%20pro");
  });

  it("search handles special characters", () => {
    expect(paths.search.getHref("café & co")).toBe(
      "/search?s=caf%C3%A9%20%26%20co"
    );
  });

  it("product builds id path", () => {
    expect(paths.product.getHref(1)).toBe("/product/1");
  });
});
