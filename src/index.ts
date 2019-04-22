import isArrayLike from "is-array-like";

function toArray<T>(args: ArrayLike<T>, start?: number): T[] {

  if (!isArrayLike(args)) {
    throw new TypeError(`${args} can't be converted to array.`);
  }

  if (start == null) {
    start = 0;
  }

  if (typeof start !== "number") {
    throw new TypeError(`${start} is not a number.`);
  }

  const params = [];

  for (let index = start, len = args.length; index < len; index++) {
    params[index - start] = args[index];
  }

  return params;

}

export default toArray;
