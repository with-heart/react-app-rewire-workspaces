import {terser} from 'rollup-plugin-terser'
import pkg from './package.json'

export default [
  {
    input: 'src/index.js',
    external: ['react-app-rewired'],
    plugins: [terser()],
    output: [{file: pkg.main, format: 'cjs'}],
  },
]
