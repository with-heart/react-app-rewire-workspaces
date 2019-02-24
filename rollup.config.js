import pkg from './package.json'

export default [
  {
    input: 'src/index.js',
    external: ['react-scripts/config/paths'],
    output: [{file: pkg.main, format: 'cjs'}],
  },
]
