import { Of, of, ofAny, ofAnyCase, ofCase, ofError, ofIt, ofOutcome, ofResult, ofSync } from "../dist/of.js";
import { describe, it } from "node:test";
import assert from "node:assert";

const expect = (actual) => ({
  toBeDefined: () => assert.notStrictEqual(actual, undefined),
  toEqual: (expected) => assert.deepStrictEqual(actual, expected),
  toBeUndefined: () => assert.strictEqual(actual, undefined),
  toBe: (expected) => assert.strictEqual(actual, expected),
  toBeInstanceOf: (expected) => assert.ok(actual instanceof expected),
});

describe("Functions", () => {
  it("should not crash on call", () => {
    expect(Of).toBeDefined();
    expect(of).toBeDefined();
    expect(ofAny).toBeDefined();
    expect(ofAnyCase).toBeDefined();
    expect(ofCase).toBeDefined();
    expect(ofError).toBeDefined();
    expect(ofIt).toBeDefined();
    expect(ofResult).toBeDefined();
    expect(ofOutcome).toBeDefined();
  });
  it("of - success", async () => {
    const fetchUserData = () => Promise.resolve({ id: 1, name: "John Doe" });
    const [user, error] = await of(fetchUserData());
    expect(user).toEqual({ id: 1, name: "John Doe" });
    expect(error).toBeUndefined();
  });
  it("of - success with object", async () => {
    const value = { foo: "bar" };
    const [result, error] = await of(Promise.resolve(value));
    expect(result).toEqual(value);
    expect(error).toBeUndefined();
  });
  it("of - failure with Error", async () => {
    const fetchFailingData = () => Promise.reject(new Error("API is down"));
    const [data, error] = await of(fetchFailingData());
    expect(data).toBeUndefined();
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toEqual("API is down");
  });
  it("of - failure with string", async () => {
    const errorValue = "Something went wrong";
    const [result, error] = await of(Promise.reject(errorValue));
    expect(result).toBeUndefined();
    expect(error).toBe(errorValue);
  });
  it("of - failure with null (should return Unknown Error)", async () => {
    const [result, error] = await of(Promise.reject(null));
    expect(result).toBeUndefined();
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toEqual("Unknown Error");
  });
  it("ofAny - success", async () => {
    const greet = async (name) => `Hello, ${name}!`;
    const [message, error] = await ofAny(greet, ["World"]);
    expect(message).toEqual("Hello, World!");
    expect(error).toBeUndefined();
  });
  it("ofAny - async function success", async () => {
    const value = "Oh, Hi Mark!";
    const fn = async () => value;
    const [result, error] = await ofAny(fn);
    expect(result).toEqual(value);
    expect(error).toBeUndefined();
  });
  it("ofAny - function success", async () => {
    const value = "Oh, Hi Mark!";
    const fn = () => value;
    const [result, error] = await ofAny(fn);
    expect(result).toEqual(value);
    expect(error).toBeUndefined();
  });
  it("ofAny - generator function success", async () => {
    const value = "Oh, Hi Mark!";
    const fn = function* () {
      yield value;
    };
    const [result, error] = await ofAny(fn);
    expect(result).toEqual(value);
    expect(error).toBeUndefined();
  });
  it("ofAny - generator object success", async () => {
    const value = "Oh, Hi Mark!";
    const fn = function* () {
      yield value;
    };
    const gen = fn();
    const [result, error] = await ofAny(gen);
    expect(result).toEqual(value);
    expect(error).toBeUndefined();
  });
  it("ofAny - with args", async () => {
    const fn = (a, b) => a + b;
    const [result, error] = await ofAny(fn, [1, 2]);
    expect(result).toEqual(3);
    expect(error).toBeUndefined();
  });
  it("ofAny - failure with defaultResult", async () => {
    const [result, error] = await ofAny(Promise.reject("fail"), [], "default");
    expect(result).toEqual("default");
    expect(error).toEqual("fail");
  });
  it("ofAny - failure with overrideError string", async () => {
    const [result, error] = await ofAny(Promise.reject(new Error("original")), [], undefined, "overridden");
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toEqual("overridden");
  });
  it("ofAny - failure with overrideError Error", async () => {
    const customError = new Error("custom");
    const [result, error] = await ofAny(Promise.reject(new Error("original")), [], undefined, customError);
    expect(error).toBe(customError);
  });
  it("ofAnyCase - timeout", async () => {
    const promise = new Promise((resolve) => setTimeout(() => resolve("too late"), 100));
    const [result, error] = await ofAnyCase(promise, { timeout: 10 });
    expect(result).toBeUndefined();
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toEqual("Timeout: 10ms");
  });
  it("ofAnyCase - retries", async () => {
    let attempts = 0;
    const unstableOperation = async () => {
      attempts++;
      if (attempts < 2) throw new Error("Temporary failure");
      return "Success on second try";
    };
    const [result, error] = await ofAnyCase(unstableOperation, { retries: 2 });
    expect(result).toEqual("Success on second try");
    expect(error).toBeUndefined();
    expect(attempts).toEqual(2);
  });
  it("ofOutcome - success", async () => {
    const getScore = () => Promise.resolve(100);
    const result = await ofOutcome(getScore());
    expect(result).toEqual(100);
  });
  it("ofOutcome - failure returns error", async () => {
    const errorValue = new Error("fail");
    const result = await ofOutcome(Promise.reject(errorValue));
    expect(result).toBe(errorValue);
  });
  it("ofCase - success", async () => {
    const value = "Oh, Hi Mark!";
    const [result, error] = await ofCase(Promise.resolve(value));
    expect(result).toEqual(value);
    expect(error).toBeUndefined();
  });
  it("ofCase - timeout", async () => {
    const promise = new Promise((resolve) => setTimeout(() => resolve("too late"), 100));
    const [result, error] = await ofCase(promise, { timeout: 10 });
    expect(result).toBeUndefined();
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toEqual("Timeout: 10ms");
  });
  it("ofError - success returns undefined", async () => {
    const result = await ofError(Promise.resolve("success"));
    expect(result).toBeUndefined();
  });
  it("ofError - failure returns error", async () => {
    const errorValue = new Error("fail");
    const result = await ofError(Promise.reject(errorValue));
    expect(result).toBe(errorValue);
  });
  it("ofError - failure with overrideError string", async () => {
    const result = await ofError(Promise.reject(new Error("original")), "overridden");
    expect(result).toBeInstanceOf(Error);
    expect(result.message).toEqual("overridden");
  });
  it("ofIt - success", async () => {
    const value = "Oh, Hi Mark!";
    const [result, error] = await ofIt(Promise.resolve(value));
    expect(result).toEqual(value);
    expect(error).toBeUndefined();
  });
  it("ofIt - failure with defaultResult", async () => {
    const [result, error] = await ofIt(Promise.reject("fail"), "default");
    expect(result).toEqual("default");
    expect(error).toEqual("fail");
  });
  it("ofResult - success", async () => {
    const fetchConfig = () => Promise.resolve({ theme: "dark" });
    const config = await ofResult(fetchConfig(), { theme: "light" });
    expect(config).toEqual({ theme: "dark" });
  });
  it("ofResult - failure returns default", async () => {
    const fetchConfig = () => Promise.reject(new Error("File not found"));
    const config = await ofResult(fetchConfig(), { theme: "light" });
    expect(config).toEqual({ theme: "light" });
  });
  it("ofSync - success", () => {
    const parseData = (json) => JSON.parse(json);
    const [data, error] = ofSync(parseData, ['{"id": 1}']);
    expect(data).toEqual({ id: 1 });
    expect(error).toBeUndefined();
  });
  it("ofSync - failure", () => {
    const fn = () => {
      throw new Error("fail");
    };
    const [result, error] = ofSync(fn);
    expect(result).toBeUndefined();
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toEqual("fail");
  });
  it("ofSync - failure with overrideError string", () => {
    const fn = () => {
      throw new Error("original");
    };
    const [result, error] = ofSync(fn, [], undefined, "overridden");
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toEqual("overridden");
  });
  it("ofSync - failure with overrideError Error", () => {
    const customError = new Error("custom");
    const fn = () => {
      throw new Error("original");
    };
    const [result, error] = ofSync(fn, [], undefined, customError);
    expect(error).toBe(customError);
  });
  it("ofSync - failure with null thrown", () => {
    const fn = () => {
      throw null;
    };
    const [result, error] = ofSync(fn);
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toEqual("Unknown Error");
  });
});

describe("Static Methods", () => {
  it("Of.async", async () => {
    const value = "Oh, Hi Mark!";
    const [result, error] = await Of.async(Promise.resolve(value));
    expect(result).toEqual(value);
    expect(error).toBeUndefined();
  });
  it("Of.any", async () => {
    const value = "Oh, Hi Mark!";
    const [result, error] = await Of.any(Promise.resolve(value));
    expect(result).toEqual(value);
    expect(error).toBeUndefined();
  });
  it("Of.anyCase", async () => {
    const value = "Oh, Hi Mark!";
    const [result, error] = await Of.anyCase(Promise.resolve(value));
    expect(result).toEqual(value);
    expect(error).toBeUndefined();
  });
  it("Of.outcome", async () => {
    const value = "Oh, Hi Mark!";
    const result = await Of.outcome(Promise.resolve(value));
    expect(result).toEqual(value);
  });
  it("Of.case", async () => {
    const value = "Oh, Hi Mark!";
    const [result, error] = await Of.case(Promise.resolve(value));
    expect(result).toEqual(value);
    expect(error).toBeUndefined();
  });
  it("Of.error", async () => {
    const result = await Of.error(Promise.resolve("success"));
    expect(result).toBeUndefined();
  });
  it("Of.it", async () => {
    const value = "Oh, Hi Mark!";
    const [result, error] = await Of.it(Promise.resolve(value));
    expect(result).toEqual(value);
    expect(error).toBeUndefined();
  });
  it("Of.result", async () => {
    const value = "Oh, Hi Mark!";
    const result = await Of.result(Promise.resolve(value));
    expect(result).toEqual(value);
  });
  it("Of.sync", () => {
    const value = "Oh, Hi Mark!";
    const fn = (arg) => arg;
    const [result, error] = Of.sync(fn, [value]);
    expect(result).toEqual(value);
    expect(error).toBeUndefined();
  });
});
