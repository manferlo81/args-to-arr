import buble from "rollup-plugin-buble";

import { main, module as esModule } from "./package.json";

/** @type {string} */
const input = "src/index.js";

/** @type {import("rollup").OutputOptions} */
const cjsOutput = {
  file: main,
  format: "cjs",
  sourcemap: true,
};

/** @type {import("rollup").OutputOptions} */
const esOutput = {
  file: esModule,
  format: "es",
  sourcemap: true,
};

/** @type {import("rollup").RollupOptions} */
const config = {

  input,
  output: [cjsOutput, esOutput],

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
  ],

};

export default config;
