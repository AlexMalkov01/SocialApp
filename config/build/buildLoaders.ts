import webpack from "webpack";
import { IBuildOptions } from "./types/config";
import buildCssLoaders from "./loaders/buildCssLoaders";

export function buildLoaders({isDev}:IBuildOptions): webpack.RuleSetRule[] {

    // если необходимо использовать Babel, используйте ts-loader вместо Babel-loader 
    const svgLoader ={
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    };

    const fileLoader = {  
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      };

      const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "i18next-extract",
                {
                  locales: ["ru", "en"],
                  outputPath: "public/locales/{{locale}}/{{ns}}.json"
                }
              ]
            ]
          }
        }
      };
      
    
    const cssLoader = buildCssLoaders(isDev)

    const typeScriptLoader = 
        {
            test: /\.tsx?$/,
            use: ["ts-loader"],
            exclude: /node_modules/,
        };
    

    return [ 
      svgLoader,
      fileLoader,
      babelLoader,
      typeScriptLoader,
      cssLoader,
    ];
}