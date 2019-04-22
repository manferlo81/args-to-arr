import buble from "rollup-plugin-buble";
import optimize from "./plugins/optimize";
import dts from "rollup-plugin-dts";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import equals from "rollup-plugin-export-equals";

import { main, module as esModule, typings, dependencies } from "./package.json";

const DEV = process.env.ROLLUP_WATCH;

const input = "src/index.ts";
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

const dtsOutput = {
  file: typings,
  format: "es",
};

const external = Object.keys(dependencies);

// /** @type {import("rollup").RollupOptions} */
// const config = {

//   input,
//   output: [cjsOutput, esOutput],

//   external,

//   plugins: [

//     buble({
//       target: {
//         node: 0.12,
//         ie: 8,
//         chrome: 48,
//         firefox: 43,
//         safari: 8,
//         edge: 12,
//       },
//     }),

//     !DEV && optimize({
//       sourcemap,
//       toplevel: true,
//       nameCache: {},
//       indent: 2,
//       quote: "\"",
//     }),

//   ],

// };


/** @type {import("rollup").RollupOptions} */
const jsConfig = {

  input: "src/index.ts",
  output: [cjsOutput, esOutput],

  external,

  plugins: [

    resolve({
      jsnext: true,
      extensions: [".ts"],
    }),

    commonjs(),

    dts({
      banner: !!DEV,
      compileMode: "js",
      compilerOptions: {
        target: "esnext",
      },
    }),

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

/** @type {import("rollup").RollupOptions} */
const dtsConfig = {

  input,
  output: dtsOutput,

  external,

  plugins: [

    dts({
      banner: !!DEV,
      compileMode: "dts",
    }),

    equals(),

  ],

};

export default [jsConfig, dtsConfig];
