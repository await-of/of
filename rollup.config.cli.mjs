import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const INPUT_NAME = "index.mjs";
const OUTPUT_NAME = "of";

export default {
  input: `./src/${INPUT_NAME}`,
  output: [
    {
      file: `./dist/${OUTPUT_NAME}.cjs`,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: `./dist/${OUTPUT_NAME}.mjs`,
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    babel({ babelrc: true }),
    resolve(),
    commonjs(),
    terser({
      sourcemap: true,
      warnings: true,
      keep_classnames: true,
      keep_fnames: true,
    }),
  ]
};