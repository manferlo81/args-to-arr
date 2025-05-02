import isArrayLike from 'is-array-like';

function toArray<T>(
  args: IArguments | T[] | string | ArrayLike<T>,
  start?: number | null,
): T[] {

  if (!isArrayLike(args) && args !== '') {
    throw new TypeError(`${args as string} can't be converted to array.`);
  }

  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  if (start == null) {
    start = 0;
  }

  if (typeof start !== 'number' || !Number.isFinite(start)) {
    throw new TypeError(`${start as unknown as string} is not a valid start point.`);
  }

  const { length: len } = args;

  if (start < 0) {
    start += len;
  }

  const argsObj = Object(args) as Record<number, T>;
  const result = new Array<T>(len - start);

  for (let i = start; i < len; i++) {
    if (i in argsObj) {
      result[i - start] = argsObj[i];
    }
  }

  return result;

}

export default toArray;
