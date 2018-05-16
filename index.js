const FaviconsPlugin = require('favicons-webpack-plugin')

/**
 * @param {object} config
 * @param {any[]} config.plugins
 */
function rewireFaviconsPlugin(config, env, faviconsPluginOptions = {}) {
  config.plugins = (config.plugins || [])
    .concat([new FaviconsPlugin(faviconsPluginOptions)])

  return config
}

module.exports = rewireFaviconsPlugin
