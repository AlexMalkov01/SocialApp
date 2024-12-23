import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import path from "path";
import * as webpack from 'webpack';
import { IBuildOptions } from "./types/config";


export function buildPlugins({paths , isDev}:IBuildOptions):webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css[name].[contenthash:8].css"
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer:false
        }),

        new webpack.HotModuleReplacementPlugin()
    ]
};