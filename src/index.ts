import isArrayLike from "is-array-like";

function toArray<T>(args: IArguments | T[] | ArrayLike<T>, start?: number | null): T[] {

  if (!isArrayLike(args)) {
    throw new TypeError(`${args} can't be converted to array.`);
  }

  if (start == null) {
    start = 0;
  }

  if (typeof start !== "number" || !isFinite(start)) {
    throw new TypeError(`${start} is not a valid start point.`);
  }

  const len = args.length;

  if (start < 0) {
    start += len;
  }

  const result = new Array(len - start);

  for (let i = start; i < len; i++) {
    if (i in args) {
      result[i - start] = args[i];
    }
  }

  return result;

}

export default toArray;
