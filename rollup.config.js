import buble from "rollup-plugin-buble";
import optimize from "./plugins/optimize";

import { main, module as esModule, dependencies } from "./package.json";

const DEV = process.env.ROLLUP_WATCH;

const input = "src/index.js";
const sourcemap = true;

/** @type {import("rollup").OutputOptions} */
const cjsOutput = {
  file: main,
  format: "cjs",
  sourcemap,
  interop: false,
};

/** @type {import("rollup").OutputOptions} */
const esOutput = {
  file: esModule,
  format: "es",
  sourcemap,
};

const external = Object.keys(dependencies);

/** @type {import("rollup").RollupOptions} */
const config = {

  input,
  output: [cjsOutput, esOutput],

  external,

  plugins: [

    buble({
      target: {
        node: 0.12,
        ie: 8,
        chrome: 48,
        firefox: 43,
        safari: 8,
        edge: 12,
      },
    }),

    !DEV && optimize({
      sourcemap,
      toplevel: true,
      nameCache: {},
      indent: 2,
      quote: "\"",
    }),

  ],

};

export default config;
