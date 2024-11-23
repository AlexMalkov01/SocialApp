import { IBuildOptions } from "./types/config";
import type { Configuration as DevServerConfig } from "webpack-dev-server";

export function buildDevServer(options:IBuildOptions): DevServerConfig {

    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    }
}