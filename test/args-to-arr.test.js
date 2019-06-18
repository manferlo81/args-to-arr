// @ts-check

const toArray = require("..");

function toArrayWithActualArguments(args, start) {
  const func = function () {
    return toArray(arguments, start);
  };
  return func.apply(this, args);
}

describe("args-to-arr", () => {

  test("should throw error on wrong 'args' argument", () => {

    // @ts-ignore
    const callWithWrongArgs = () => toArray({}, 0);

    expect(callWithWrongArgs).toThrowError(TypeError);

  });

  test("should throw error on wrong 'start' argument", () => {

    const wrongStart = [
      "wrong argument",
      {},
      [],
      true,
      false,
      () => { },
      1 / 0,
      -1 / 0,
      Infinity,
      -Infinity,
      1 / +"NaN",
      NaN,
    ];

    wrongStart.forEach((start) => {
      // @ts-ignore
      expect(() => toArray([], start)).toThrowError(TypeError);
    });

  });

  test("should work with actual arguments", () => {

    const args = [1, 5, true, null, {}];
    const result = toArrayWithActualArguments(args, 0);

    expect(result).toEqual(args);
    expect(result).not.toBe(args);

  });

  test("should work with non arguments, array or array-like", () => {

    const args = [1, 5, true, null, {}];
    const result = toArray(args, 0);

    expect(result).toEqual(args);
    expect(result).not.toBe(args);

  });

  test("should return a copy of the array", () => {

    const args = [1, 5, true, null, {}];
    const result = toArray(args, 0);

    expect(result).toEqual(args);
    expect(result).not.toBe(args);

  });

  test("should skip non-existent values", () => {

    // eslint-disable-next-line no-sparse-arrays
    const args = [0, 1, , 3, 4];

    const result = toArray(args, 0);

    expect(2 in result).toBe(false);

  });

  test("should follow negative start argument", () => {

    // eslint-disable-next-line no-sparse-arrays
    const lastArgs = [null, {}];
    const args = [1, 5, true, ...lastArgs];
    const result = toArray(args, -lastArgs.length);

    expect(result).toEqual(lastArgs);

  });

  test("should follow off bound negative start argument", () => {

    const args = [1, 2];
    const result = toArray(args, -3);

    // eslint-disable-next-line no-sparse-arrays
    expect(result).toEqual([, 1, 2]);
    expect(0 in result).toBe(false);

  });

  test("should default to 0 if 'start' argument not provided", () => {

    const args = [1, 5, true, null, {}];
    const result = toArray(args);

    expect(result).toEqual(args);

  });

  test("should default to 0 if 'start' argument is null", () => {

    const args = [1, 5, true, null, {}];
    const result = toArray(args, null);

    expect(result).toEqual(args);

  });

  test("should default to 0 if 'start' argument is undefined", () => {

    const args = [1, 5, true, null, {}];
    const result = toArray(args, undefined);

    expect(result).toEqual(args);

  });

  test("should start from provided 'start' argument", () => {

    const expected = [true, null, {}];
    const args = [1, 5, ...expected];
    const start = args.length - expected.length;

    const result = toArray(args, start);

    expect(result).toHaveLength(expected.length);
    expect(result).toEqual(expected);

  });

});
