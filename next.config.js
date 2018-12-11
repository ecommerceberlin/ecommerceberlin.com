require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { ANALYZE } = process.env;
const { IgnorePlugin } = require('webpack');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {

    config.plugins = config.plugins || []

    //config.plugins.push(new IgnorePlugin(/^raven$/));

    config.plugins.push(
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    )
    
    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true
        })
      );
    }


    return config
  }
}