import eslint from "@eslint/js";
import tseslint from 'typescript-eslint'
import stylisticJs from '@stylistic/eslint-plugin-js'
import jest from 'eslint-plugin-jest';
import nodePlugin from 'eslint-plugin-n';

export const baseConfig = [
  eslint.configs.recommended,
  stylisticJs.configs['disable-legacy'],
  {
    plugins: {
     '@stylistic/js': stylisticJs
    },
    rules: {
      '@stylistic/js/semi': ['error', 'always'],

    }
  }
];

export const typescriptConfig = [
   ...baseConfig,
  {
    plugins: {
      '@typescript-eslint/parser': tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
    },
  },
  ...tseslint.configs.recommended,
]

export const jestConfig = [
  jest.configs['flat/recommended'],
  jest.configs['flat/style'],
]

export const nodeConfig = [
  nodePlugin.configs['flat/recommended'],

]

export default {
  configs: {
    base: baseConfig,
    typescript: typescriptConfig,
    jest: jestConfig,
    node: nodeConfig,
  }
}
