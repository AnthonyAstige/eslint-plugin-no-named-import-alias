import noNamedImportAlias from './dist/index.js';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    files: ['src/**/*.ts', 'tests/**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      'eslint-plugin-no-named-import-alias': noNamedImportAlias
    },
    rules: {
      'eslint-plugin-no-named-import-alias/no-import-as': 'error'
    }
  }
];
