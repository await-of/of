/*  eslint-env node */
import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

// console.log(resolve.nodeResolve);
// process.exit(0);

const IS_DEV = process.env.ROLLUP_WATCH;

const INPUT_NAME = "index.mjs";
const OUTPUT_NAME = "of";
const UMD_NAME = "of";

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
    {
      file: `./dist/${OUTPUT_NAME}.js`,
      format: "umd",
      globals: { moment: "moment" },
      name: UMD_NAME,
      sourcemap: true,
    },
  ],
  plugins: [
    babel({ babelrc: true }),
    resolve.nodeResolve(),
    commonjs(),
    !IS_DEV &&
      terser({
        keep_classnames: true,
        keep_fnames: true,
        output: {
          comments: false,
        },
        warnings: true,
      }),
  ],
};
