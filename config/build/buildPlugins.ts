import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path";
import * as webpack from 'webpack';
import { IBuildOptions } from "./types/config";


export function buildPlugins({paths}:IBuildOptions):webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css[name].[contenthash:8].css"
        })
    ]
}