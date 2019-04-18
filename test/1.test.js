const toArray = require("..");

const exec = (args, start) => {

  const func = function () {
    return start != null ? toArray(arguments, start) : toArray(arguments);
  };

  return args ? func.apply(null, args) : func();

};

test("should throw error on wrong 'args' argument", () => {

  expect(() => {
    toArray({}, 0);
  }).toThrowError(TypeError);

});

test("should throw error on wrong 'start' argument", () => {

  expect(() => {
    toArray([], "wrong argument");
  }).toThrowError(TypeError);

});

test("should convert arguments into a new array", () => {

  const args = [1, 5, true, null, {}];
  const result = exec(args, 0);

  expect(result).not.toBe(args);

});

test("should return a copy of the array", () => {

  const args = [1, 5, true, null, {}];
  const result = exec(args, 0);

  expect(result).toMatchObject(args);

});

test("should start from 0 if 'start' argument not provided", () => {

  const args = [1, 5, true, null, {}];
  const result = exec(args, null);

  expect(result).toMatchObject(args);

});

test("should start from provided argument", () => {

  const expected = [true, null, {}];
  const args = [1, 5, ...expected];
  const result = exec(args, args.length - expected.length);

  expect(result).toMatchObject(expected);

});
