module.exports = {
  module: {
    rules: [
      {
        oneOf: [
          {
            loader: 'babel-loader',
            include: 'src',
            options: {
              plugins: [],
            },
          },
        ],
      },
    ],
  },
}
