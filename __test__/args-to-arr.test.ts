import toArray from '../src';

describe('args-to-arr', () => {

  function toArrayWithActualArguments(this: any, args: any[], start: number) {

    function func() {
      // eslint-disable-next-line prefer-rest-params
      return toArray(arguments, start);
    }

    return func.apply<any, any[], any[]>(this, args);

  }

  test('Should throw on invalid \'args\' argument', () => {
    expect(() => toArray({} as never, 0)).toThrow(TypeError);
  });

  test('Should throw on invalid \'start\' argument', () => {

    const wrongStart = [
      'wrong argument',
      {},
      [],
      true,
      false,
      () => null,
      1 / 0,
      -1 / 0,
      Infinity,
      -Infinity,
      1 / +'NaN',
      NaN,
    ];

    wrongStart.forEach((start) => {
      expect(() => toArray([], start as never)).toThrow(TypeError);
    });

  });

  test('Should work with actual arguments', () => {

    const args = [1, 5, true, null, {}];
    const result = toArrayWithActualArguments(args, 0);

    expect(result).toEqual(args);

  });

  test('Should work with non arguments, array or array-like', () => {

    const args = [1, 5, true, null, {}];
    const result = toArray(args, 0);

    expect(result).toEqual(args);

  });

  test('Should work with empty string', () => {
    expect(toArray('', 0)).toEqual([]);
  });

  test('Should work with strings', () => {

    const args = 'abc';
    const arr = args.split('');

    expect(toArray(args, 0)).toEqual(arr);

  });

  test('Should return a copy of the array', () => {

    const args = [1, 5, true, null, {}];
    const result = toArray(args, 0);

    expect(result).toEqual(args);
    expect(result).not.toBe(args);

  });

  test('Should skip non-existent values', () => {
    // eslint-disable-next-line no-sparse-arrays
    const result = toArray([0, 1, , 3, 4], 0);
    expect(2 in result).toBe(false);
  });

  test('Should follow negative start argument', () => {

    const lastArgs = [null, {}];
    const args = [1, 5, true, ...lastArgs];

    expect(toArray(args, -lastArgs.length)).toEqual(lastArgs);

  });

  test('Should follow off bound negative start argument', () => {

    const args = [1, 2];
    const result = toArray(args, -3);

    // eslint-disable-next-line no-sparse-arrays
    expect(result).toEqual([, 1, 2]);
    expect(0 in result).toBe(false);

  });

  test('Should default to 0 if \'start\' argument not provided', () => {

    const args = [1, 5, true, null, {}];
    const result = toArray(args);

    expect(result).toEqual(args);

  });

  test('Should default to 0 if \'start\' argument is null', () => {

    const args = [1, 5, true, null, {}];
    const result = toArray(args, null);

    expect(result).toEqual(args);

  });

  test('Should default to 0 if \'start\' argument is undefined', () => {

    const args = [1, 5, true, null, {}];
    const result = toArray(args, undefined);

    expect(result).toEqual(args);

  });

  test('Should start from provided \'start\' argument', () => {

    const expected = [true, null, {}];
    const args = [1, 5, ...expected];
    const start = args.length - expected.length;

    const result = toArray(args, start);

    expect(result).toHaveLength(expected.length);
    expect(result).toEqual(expected);

  });

});
