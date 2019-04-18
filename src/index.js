export default function toArray(args, start) {
  start = start || 0;
  const params = [];
  for (let index = start, len = args.length; index < len; index++) {
    params[index - start] = args[index];
  }
  return params;
}
