/* eslint sort-keys: 0 */
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import node from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

const presets = [['@babel/env']];

const banner = `/**
 * @wking_io/lemonade bundled; version ${pkg.version}
 */
`;

export default {
  input: 'lib/index.js',
  output: {
    banner,
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'safeProp',
  },
  plugins: [
    node({
      browser: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      externalHelpers: true,
      plugins: ['@babel/external-helpers'],
      exclude: 'node_modules/**',
      babelrc: false,
      presets,
    }),
    uglify(),
  ],
};
