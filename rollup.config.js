import buble from "rollup-plugin-buble";
import optimize from "./plugins/optimize";
import { ts, dts } from "rollup-plugin-dts";
import equals from "rollup-plugin-export-equals";

import { main, module as esModule, typings, dependencies } from "./package.json";

const DEV = process.env.ROLLUP_WATCH;

const input = "src/index.ts";
const sourcemap = true;

const cjsOutput = {
  file: main,
  format: "cjs",
  sourcemap,
  interop: false,
};

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

const jsConfig = {

  input: "src/index.ts",
  output: [cjsOutput, esOutput],

  external,

  plugins: [

    // resolve({
    //   jsnext: true,
    //   extensions: [".ts"],
    // }),

    // commonjs(),

    ts({ banner: !!DEV }),

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

const dtsConfig = {

  input,
  output: dtsOutput,

  external,

  plugins: [

    dts({ banner: !!DEV }),

    equals(),

  ],

};

export default [jsConfig, dtsConfig];
