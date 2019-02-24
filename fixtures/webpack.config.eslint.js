module.exports = {
  module: {
    rules: [
      {
        use: [
          {
            loader: 'eslint-loader',
          },
        ],
        include: 'src',
      },
    ],
  },
}
