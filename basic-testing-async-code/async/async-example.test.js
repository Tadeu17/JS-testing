import { describe, it, expect, test } from "vitest";

import { generateToken, generateTokenPromise } from "./async-example";

const testUserEmail = "test@test.com";

// callback test. because we have done() the function will wait for done to happen
// so if you do not have a try catch and an error is thrown, the done() will never happen
// so the test will fail with timeout
// instead, if we wrap it in try catch, we can catch the error and see what actually made the code fail
it("should generate a token value from a callback", (done) => {
  generateToken(testUserEmail, (err, token) => {
    try {
      expect(token).toBeDefined();
      // expect(token).toBe(2);
      done();
    } catch (error) {
      done(err);
    }
  });
});

// Promises
it("should generate a token value from a promise", () => {
  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
  // OR
  //   expect(generateTokenPromise(testUserEmail)).rejects.toBe();
});

it("should generate a token value from a promise with async await", async () => {
  const token = await generateTokenPromise(testUserEmail);
  expect(token).toBeDefined();
});
