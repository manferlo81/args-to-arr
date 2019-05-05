const toArray = require("..");

describe("args-to-arr", () => {

  const exec = (args, start) => {

    const func = function () {
      return start != null ? toArray(arguments, start) : toArray(arguments);
    };

    return args ? func.apply(null, args) : func();

  };

  test("should throw error on wrong 'args' argument", () => {

    const callWithWrongArgs = () => toArray({}, 0);

    expect(callWithWrongArgs).toThrowError(TypeError);

  });

  test("should throw error on wrong 'start' argument", () => {

    const callWithWrongStart = () => toArray([], "wrong argument");

    expect(callWithWrongStart).toThrowError(TypeError);

  });

  test("should return a copy of the array", () => {

    const args = [1, 5, true, null, {}];
    const result = exec(args, 0);

    expect(result).toEqual(args);
    expect(result).not.toBe(args);

  });

  test("should default to 0 if 'start' argument not provided", () => {

    const args = [1, 5, true, null, {}];
    const result = exec(args, null);

    expect(result).toEqual(args);

  });

  test("should start from provided 'start' argument", () => {

    const expected = [true, null, {}];
    const args = [1, 5, ...expected];
    const start = args.length - expected.length;

    const result = exec(args, start);

    expect(result).toEqual(expected);

  });

});
