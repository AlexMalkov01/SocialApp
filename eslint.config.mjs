// eslint.config.mjs
import * as globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import i18nextPlugin from 'eslint-plugin-i18next';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], // Какие файлы линтить
    languageOptions: {
      parser: tsParser, // Используем TypeScript-парсер
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Поддержка JSX
        },
      },
      globals: {
        ...globals.browser, // Глобальные переменные браузера
      },
    },
    plugins: {
      react: pluginReact,
      '@typescript-eslint': tseslint,
      i18next: i18nextPlugin,
    },
    rules: {
      'quotes': ['error', 'double'], // Используем двойные кавычки
      'semi': ['error', 'always'], // Требуем точки с запятой
      '@typescript-eslint/no-unused-vars': ['warn'], // Неиспользуемые переменные
      'react/react-in-jsx-scope': 'off', // React в области видимости (не нужно с React 17+)
      'no-console': 'warn', // Предупреждение о console.log
      'i18next/no-literal-string': [
        'error',
        { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] }, // Локализация строк
      ],
      'react/boolean-prop-naming': [
        'error',
        {
          rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+', // Префиксы для булевых пропсов
          message: 'Boolean props должны начинаться с "is" или "has".',
        },
      ],
    },
  },
  {
    files: ['**/src/**/*.test.{ts,tsx}'], // Файлы тестов
    rules: {
      'i18next/no-literal-string': 'off', // Отключаем правило для тестов
    },
  },
];



