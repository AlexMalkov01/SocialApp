import { ResolveOptions } from "webpack";
import { IBuildOptions } from "./types/config";

export function buildResolvers(options:IBuildOptions):ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js', '.jsx'], 
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}


//  modules: [options.paths.src, 'node_modules'],
//mainFiles: ['index'],
//alias: {} 
// Настройка для абсолютных путей и указания основного файла приложения.