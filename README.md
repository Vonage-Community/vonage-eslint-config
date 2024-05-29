# Vonage Eslint Configuration

<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Vonage JWT SDK for Node.js. This package helps create JWT tokens to use with [Vonage APIs](https://www.vonage.com/).

For full API documentation refer to [developer.vonage.com](https://developer.vonage.com/).

* [Installation](#installation)
* [Usage](#usage)
* [Testing](#testing)

## Installation

### With NPM

```bash
npm i -D @vonage/eslint-config
```

### With Yarn

```bash
yarn add @vonage/eslint-config --dev
```

## Usage

There are number of configurations that you can use based on the application.

Each configuration extends the base rules.

```js
// eslint.config.js

import vonage from '@vonage/eslint-config';

export default [
  // Include all base rules for all JS projects
  ...vonage.configs.base,

  // Include all base rules for all TypeScript projects
  ...vonage.configs.typescript,

  // Include all base rules for all Jest projects
  ...vonage.configs.jest,

  // Include all base rules for all Node projects
  ...vonage.configs.node,
];
```

*Note* currently this is only for Node.js projects. Web projects are expected to
be added in the future.
