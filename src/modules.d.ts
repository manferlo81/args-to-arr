declare module 'is-array-like' {
  function isArrayLike<T>(param: unknown): param is ArrayLike<T>;
  export default isArrayLike
}
