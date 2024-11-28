import { it, expect } from "vitest";

import { transformToNumber } from "./numbers.js";

it("should trasnform a string to a number of type number", () => {
  const input = "1";

  const result = transformToNumber(input);

  expect(result).toBeTypeOf("number");
  expect(result).toBeTypeOf(+input);

});

it("should yield NaN for non-transformable values", () => {
  const input = "invalid";
  const input2 = {}

  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);

  expect(result).toBeNan();
  expect(result2).toBeNan();
});
