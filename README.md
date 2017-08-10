# Connector

Simple connector component for React apps

## Usage

> npm install @mcrowe/connector --save

```js
import * as React from 'react'
import * as ReactDom from 'react-dom'
import Connector from '@mcrowe/connector'

const connector = new Connector()

class Root extends React.Component {
  // ...
}

ReactDom.render(
  React.createElement( connector.wrap(Root) ),
  document.getElementById('app')
)

// When the app should refresh...
connector.refresh()
```

## Development

Install npm modules:

> npm install

Run tests:

> npm test

## Release

Release a new version:

> bin/release.sh

This will publish a new version to npm, as well as push a new tag up to github.
