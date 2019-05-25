const toArray = require("..");

function toArrayWithActualArguments(args, start) {
  const startProvided = arguments.length > 1;
  const func = function () {
    return startProvided ? toArray(arguments, start) : toArray(arguments);
  };
  return args ? func.apply(this, args) : func.call(this);
}

describe("args-to-arr", () => {

  test("should throw error on wrong 'args' argument", () => {

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
    ];

    wrongStart.forEach((start) => {
      expect(() => toArray([], start)).toThrowError(TypeError);
    });

  });

  test("should work with actual arguments", () => {

    const args = [1, 5, true, null, {}];
    const result = toArrayWithActualArguments(args, 0);

    expect(result).toEqual(args);
    expect(result).not.toBe(args);

  });

  test("should work with non arguments array or array-like", () => {

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

    expect(result).toEqual(expected);

  });

});
