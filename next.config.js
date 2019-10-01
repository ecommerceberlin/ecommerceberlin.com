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
  },

  env: {
    PUBLIC_URL : 'https://ecommerceberlin.com',
    API_PUBLIC : 'https://api.eventjuicer.com/v1/public/hosts/ecommerceberlin.com',
    API_SERVICES : 'https://api.eventjuicer.com/v1/services',
    DEFAULT_LOCALE : 'en',
    BOOTH_LIGHT : 286,
    BOOTH_STANDARD : 281,
    BOOTH_HOT : 282,
    BOOTH_SUPERHOT : 283,
    BOOTH_ULTRA : 285,
    BOOTH_GRAND : 284,
    BOOTH_STAGE : 287,
    GTM : "GTM-5RJC4J"
  },

}