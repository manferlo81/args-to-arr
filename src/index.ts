import isArrayLike from "is-array-like";

function toArray<T>(args: ArrayLike<T>, start?: number | null): T[] {

  if (!isArrayLike(args)) {
    throw new TypeError(`${args} can't be converted to array.`);
  }

  if (start == null) {
    start = 0;
  }

  if (typeof start !== "number") {
    throw new TypeError(`${start} is not a number.`);
  }

  const len = args.length;
  const result = new Array(len - start);

  for (let i = start; i < len; i++) {
    result[i - start] = args[i];
  }

  return result;

}

export default toArray;
