const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = (_baseCnig, _env, config) => ({
  ...config,
  resolve: {
    ...config.resolve,
    modules: (config.resolve.modules || []).concat(
      path.resolve(__dirname, '../src')
    ),
  },
  module: {
    rules: [
      ...config.module.rules,
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, '../src'),
        use: [require.resolve('react-docgen-typescript-loader')],
      },
    ],
  },
  plugins: [...config.plugins, new ForkTsCheckerWebpackPlugin()],
})
