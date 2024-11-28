import { it, expect, Vitest, vitest } from "vitest";
import { add } from "./math.js";

it("should summarize all number values in an array", () => {
  // arrange
  const array = [1, 2, 3, 5];
  const expectedResult = array.reduce(
    (prevValue, currValue) => prevValue + currValue,
    0
  );
  // act
  const result = add(array);
  // assert
  expect(result).toBe(expectedResult);
});

it("should yield NaN if at least 1 invalid number is provided", () => {
  const array = ["invalid", 1];

  const result = add(array);

  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  const array = ["1", "2"];
  const expectedResult = array.reduce(
    (prevValue, currValue) => +prevValue + +currValue,
    0
  );

  const result = add(array);

  expect(result).toBe(expectedResult);
});

it("should yield 0 if an empty array is provided", () => {
  const array = [];

  const result = add(array);

  expect(result).toBe(0);
});

// ----------- ERROR testing
it("should throw an error if no value is passed into the function", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});

// reg expression, regex
it("should throw an error if provided with multiple arguments instead of an array", () => {
  const num1 = 1,
    num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/is not iterable/);
});
