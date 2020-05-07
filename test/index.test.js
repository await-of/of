const { Of, of, ofAny, ofAnyCase, ofCase, ofError, ofIt, ofOutcome, ofResult, ofSync } = require("../dist/of.cjs");

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
  it("of", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return of(promise).then((result) => {
      expect(result[0]).toEqual(value);
      expect(result[1]).toBeUndefined();
    });
  });
  it("ofAny", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return ofAny(promise).then((result) => {
      expect(result[0]).toEqual(value);
      expect(result[1]).toBeUndefined();
    });
  });
  it("ofAnyCase", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return ofAnyCase(promise).then((result) => {
      expect(result[0]).toEqual(value);
      expect(result[1]).toBeUndefined();
    });
  });
  it("ofOutcome", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return ofOutcome(promise).then((result) => {
      expect(result).toEqual(value);
    });
  });
  it("ofOutcome - error", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      reject(value);
    });
    return ofOutcome(promise).then((result) => {
      expect(result).toEqual(value);
    });
  });
  it("ofCase", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return ofCase(promise).then((result) => {
      expect(result[0]).toEqual(value);
      expect(result[1]).toBeUndefined();
    });
  });
  it("ofError", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return ofError(promise).then((result) => {
      expect(result).toBeUndefined();
    });
  });
  it("ofIt", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return ofIt(promise).then((result) => {
      expect(result[0]).toEqual(value);
      expect(result[1]).toBeUndefined();
    });
  });
  it("ofResult", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return ofResult(promise).then((result) => {
      expect(result).toEqual(value);
    });
  });
  it("ofSync", () => {
    const value = "Oh, Hi Mark!";
    const callable = (arg) => {
      return arg;
    };
    expect(ofSync(callable, [value])).toEqual([value, undefined]);
  });
  it("Of", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return Of.async(promise).then((result) => {
      expect(result[0]).toEqual(value);
      expect(result[1]).toBeUndefined();
    });
  });
});

describe("Static Methods", () => {
  it("Of.async", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return Of.async(promise).then((result) => {
      expect(result[0]).toEqual(value);
      expect(result[1]).toBeUndefined();
    });
  });
  it("Of.any", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return Of.any(promise).then((result) => {
      expect(result[0]).toEqual(value);
      expect(result[1]).toBeUndefined();
    });
  });
  it("Of.anyCase", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return Of.anyCase(promise).then((result) => {
      expect(result[0]).toEqual(value);
      expect(result[1]).toBeUndefined();
    });
  });
  it("Of.outcome", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return Of.outcome(promise).then((result) => {
      expect(result).toEqual(value);
    });
  });
  it("Of.outcome - error", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      reject(value);
    });
    return Of.outcome(promise).then((result) => {
      expect(result).toEqual(value);
    });
  });
  it("Of.case", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return Of.case(promise).then((result) => {
      expect(result[0]).toEqual(value);
      expect(result[1]).toBeUndefined();
    });
  });
  it("Of.error", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return Of.error(promise).then((result) => {
      expect(result).toBeUndefined();
    });
  });
  it("Of.it", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return Of.it(promise).then((result) => {
      expect(result[0]).toEqual(value);
      expect(result[1]).toBeUndefined();
    });
  });
  it("Of.result", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return Of.result(promise).then((result) => {
      expect(result).toEqual(value);
    });
  });
  it("Of.sync", () => {
    const value = "Oh, Hi Mark!";
    const callable = (arg) => {
      return arg;
    };
    expect(Of.sync(callable, [value])).toEqual([value, undefined]);
  });
});
