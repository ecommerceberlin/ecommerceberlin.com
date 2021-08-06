
const path = require('path');
const withTM = require('next-transpile-modules')(['eventjuicer-site-components'], {resolveSymlinks: false});
const { withSentryConfig } = require('@sentry/nextjs');

const SentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};


module.exports = withSentryConfig(withTM({

    eslint: {
      // Warning: Dangerously allow production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    
    webpack: (config, options) => {
      if (options.isServer) {
        config.externals = ['react', ...config.externals];
      }

      // config.optimization.minimize = false

      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });

      
      config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react');
      return config
    },

    i18n: {
      // These are all the locales you want to support in
      // your application
      locales: ['en','de'],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: 'en',
      // This is a list of locale domains and the default locale they
      // should handle (these are only required when setting up domain routing)
      domains: [
        {
          domain: 'ecommerceberlin.de',
          defaultLocale: 'de',
        },
        {
          domain: 'ecommerceberlin.com',
          defaultLocale: 'en',
        }
      ],
    },
  
}), SentryWebpackPluginOptions);

