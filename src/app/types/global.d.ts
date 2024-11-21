declare module '*.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }

  // Эта настройка позволяет TypeScript корректно обрабатывать файлы с расширением *.scss 
  // эта настройка предназначена именно для CSS/SCSS-модулей.