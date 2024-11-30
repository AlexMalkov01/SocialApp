import  webpack  from 'webpack';
import { IBuildPaths } from '../build/types/config';
import path from 'path';
import buildCssLoaders from '../build/loaders/buildCssLoaders';

export default ({ config }: { config:webpack.Configuration }) => {
    const paths:IBuildPaths = {
        build:"",
        src: path.resolve(__dirname, "..", "..", "src"),
        entry: "",
        html: ""
    };

    config.resolve?.modules?.push(paths.src);

    config.resolve?.extensions?.push("ts","tsx");

    config.module?.rules?.push(buildCssLoaders(true));

    return config
}