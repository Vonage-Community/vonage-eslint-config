import eslint from '@eslint/js';
import tseslint from 'typescript-eslint'
import stylisticJs from '@stylistic/eslint-plugin-js'
import jest from 'eslint-plugin-jest';
import nodePlugin from 'eslint-plugin-n';
import packageJson from 'eslint-plugin-package-json';

export const baseConfig = [
  eslint.configs.recommended,
  stylisticJs.configs['disable-legacy'],
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      '@stylistic/js/semi': ['error', 'always'],
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
    }
  },
  {
    ...packageJson.configs.recommended,
    files: ['packages/**/package.json'],
    rules: {
      ...packageJson.configs.recommended.rules,
      'package-json/require-type': 'error',
      'package-json/require-engines': 'error',
      'package-json/require-files': 'error',
      'package-json/require-types': 'error',
      'package-json/restrict-dependency-ranges': [
        'error',
        [
          {
            rangeType: 'pin',
          },
        ],
      ],
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
