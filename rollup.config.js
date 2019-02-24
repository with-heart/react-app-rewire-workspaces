import {terser} from 'rollup-plugin-terser'
import pkg from './package.json'

export default [
  {
    input: 'src/index.js',
    external: ['react-scripts/config/paths'],
    plugins: [terser()],
    output: [{file: pkg.main, format: 'cjs'}],
  },
]
