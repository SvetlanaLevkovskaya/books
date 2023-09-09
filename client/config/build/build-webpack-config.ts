import { type BuildOptions } from './types/config'
import type webpack from 'webpack'
import { buildPlugins } from './build-plugins'
import { buildLoaders } from './build-loaders'
import { buildResolvers } from './build-resolvers'
import { buildDevServer } from './build-dev-server'

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
