import path from "path";
import { IBuildOptions } from "./types/config";
import * as webpack from 'webpack';
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function BuildWebpackConfig (options:IBuildOptions): webpack.Configuration {

    const { mode, paths , isDev} = options;

    return  {
        mode,
        entry: paths.entry, 
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins:buildPlugins(options ),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}