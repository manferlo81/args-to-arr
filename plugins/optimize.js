import { terser } from "rollup-plugin-terser";

/**
 * @param { object } options
 * @param { boolean | "inline" } [options.sourcemap]
 * @param { boolean } [options.toplevel]
 * @param { object } [options.nameCache]
 * @param { number } [options.indent]
 * @param { "auto" | '"' | "'" | "preserve" | number } [options.quote]
 */
function optimize(options) {

  const { sourcemap, toplevel, nameCache, indent, quote } = options;

  const quoteStrings = ["auto", "'", "\"", "preserve"];
  let quote_style = quote;
  if (typeof quote_style === "string") {
    quote_style = quoteStrings.indexOf(quote_style);
    if (quote_style === -1) {
      quote_style = 0;
    }
  }

  return terser({
    sourcemap,
    toplevel,
    nameCache,
    mangle: false,
    compress: {
      defaults: false,
      join_vars: true,
    },
    output: {
      beautify: true,
      comments: true,
      indent_level: indent,
      quote_style,
      safari10: true,
      webkit: true,
    },
  });

}

export default optimize;
