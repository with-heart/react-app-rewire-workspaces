# react-app-rewire-workspaces

A `react-app-rewired` module enabling `yarn` workspaces in `create-react-app` projects

## Installation

Install the package:

`yarn add -D react-app-rewire-workspaces`

Make sure you also have [`react-app-rewired`](https://github.com/timarney/react-app-rewired) installed:

`yarn add -D react-app-rewired`

It's also recommended that you install [`customize-cra`](https://github.com/arackaf/customize-cra) as it's the easiest way to consume `react-app-rewire-workspaces`:

`yarn add -D customize-cra`

## Usage

`react-app-rewired` is driven by a `config-overrides.js` file in the root of your CRA directory. From there, we can import `enableWorkspaces` from `react-app-rewire-workspaces` and call it:

```js
const enableWorkspaces = require('react-app-rewire-workspaces')

module.exports = function override(config, env) {
  config = enableWorkspaces()(config, env)

  return config
}
```

It's even easier if you use `customize-cra`:

```js
const {override} = require('customize-cra')
const enableWorkspaces = require('react-app-rewire-workspaces')

module.exports = override(enableWorkspaces())
```
