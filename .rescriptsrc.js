const { name } = require('./package');
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      'react-native': 'react-native-web',
      '@': path.resolve(__dirname, 'src')
    };
    console.log(config)
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';
    // Remove 'react-refresh' from the loaders.
    for (const rule of config.module.rules) {
      if (!rule.oneOf) continue;
      for (const one of rule.oneOf) {
        if (one.loader && one.loader.includes("babel-loader") && one.options && one.options.plugins) {
          one.options.plugins = one.options.plugins.filter(
            (plugin) => typeof plugin !== "string" || !plugin.includes("react-refresh")
          );
        }
      }
    }
    config.plugins = config.plugins.filter(
      (plugin) => !(plugin instanceof webpack.HotModuleReplacementPlugin) && !(plugin instanceof ReactRefreshPlugin)
    );

    
    return config;
  },

  devServer: (_) => {
    const config = _;

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};