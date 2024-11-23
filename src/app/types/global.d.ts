declare module '*.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }

  declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
  }

  declare const __IS_DEV__: boolean;

  // Эта настройка позволяет TypeScript корректно обрабатывать файлы с расширением *.scss 
  // эта настройка предназначена именно для CSS/SCSS-модулей.