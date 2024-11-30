// eslint.config.mjs
import * as globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact, { rules } from 'eslint-plugin-react';
import i18nextPlugin from 'eslint-plugin-i18next'; // Импортируем плагин

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Используем глобальные переменные для браузера
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      i18next: i18nextPlugin, // Используем объект с плагином
    },
    rules: {
      'quotes': ['error', 'double'], // Можно изменить на 'double' для двойных кавычек
      'semi': ['error', 'always'],
      '@typescript-eslint/no-unused-vars': ['warn'],
      'react/react-in-jsx-scope': 'off',
      'no-console': 'warn',

      // Пример правил для i18n
      "i18next/no-literal-string": ["error", { markupOnly: true , ignoreAttribute:["data-testid", "to"]}],  // Не разрешает строковые литералы в JSX
    },
    overrides: [
      {
        files: ["**/srs/**/*.test.{ts,tsx}"],
        rules: {
          "i18next/no-literal-string" : "off" // Отключаем правило для тестовых файлов
        }
      }
    ]
  },
];


