import * as path from "path" ;
import * as webpack from 'webpack';
import { BuildWebpackConfig } from "./config/build/buildWebpackConfig";
import { IBuildEnv, IBuildPaths } from "./config/build/types/config";



export default (env:IBuildEnv)=> {

    const paths:IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html:path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname,'src'),
    }
    
    const mode = env.mode || "development";
    const PORT = env.port || 3000;
    const isDev = mode === "development";
    
    const config:webpack.Configuration = BuildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    });

    return config;
};
