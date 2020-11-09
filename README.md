# @xelzs/mdn-browser-compat-api

![Test](https://github.com/xelzs/mdn-browser-compat-api/workflows/test/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/Xelzs/mdn-browser-compat-api/badge.svg?branch=develop)](https://coveralls.io/github/Xelzs/mdn-browser-compat-api?branch=develop)

Request the @mdn/browser-compat-data (used by caniuse.com)

## Installation

You can install `@xelzs/mdn-browser-compat-api` as a node package.

```
$ npm install @xelzs/mdn-browser-compat-api
```

## Usage

```js
const browserCompatApi = require('@xelzs/mdn-browser-compat-api');

browserCompatApi.getFeatures();
browserCompatApi.getFeatures('css');
browserCompatApi.getFolders();
browserCompatApi.getBrowsers();
browserCompatApi.find('fit-content', 'css');
browserCompatApi.get('css.properties.width.fit-content');
browserCompatApi.updateData();
// ...
```

## API

### `browserCompatApi.getFeatures(folder)`

Get a list of features from mdn with the formatted paths. You can add an optional parameter `folder` to get features from a [folder](https://github.com/mdn/browser-compat-data#repository-contents).

```js
browserCompatApi.getFeatures();
/*
[
  "api.AbortController",
  "api.AbortController.AbortController",
  "api.AbortController.abort",
  "api.AbortController.signal",
  ...
]
*/
```

### `browserCompatApi.getFolders()`

Get the list of folders inside [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data).

```js
browserCompatApi.getFolders();
/*
[
  "api",
  "browsers",
  "css",
  "css.at-rules",
  "css.properties",
  "css.selectors",
  "css.types",
  ...
*/
```

### `browserCompatApi.getBrowsers()`

Get the list of browsers. You check the schema at [@mdn compat-data-schema.md](https://github.com/mdn/browser-compat-data/blob/master/schemas/compat-data-schema.md)

### `browserCompatApi.find(query, folder)`

Search for a feature. You can add an optional parameter `folder` to search inside specific [folder](https://github.com/mdn/browser-compat-data#repository-contents).

```js
browserCompatApi.find('fit-content', 'css');
/*
[
  'css.properties.block-size.fit-content',
  'css.properties.grid-template-columns.fit-content',
  'css.properties.grid-template-rows.fit-content',
  'css.properties.height.fit-content',
  'css.properties.inline-size.fit-content',
  'css.properties.max-block-size.fit-content',
  'css.properties.max-height.fit-content',
  'css.properties.max-inline-size.fit-content',
  'css.properties.max-width.fit-content',
  'css.properties.min-block-size.fit-content',
  'css.properties.min-height.fit-content',
  'css.properties.min-inline-size.fit-content',
  'css.properties.min-width.fit-content',
  'css.properties.width.fit-content'
]
*/
```

### `browserCompatApi.get('css.properties.width.fit-content')`

Get a list of object with corresponding features.  
You check the schema at [@mdn compat-data-schema.md](https://github.com/mdn/browser-compat-data/blob/master/schemas/compat-data-schema.md)

### `browserCompatApi.updateData()`

Update data files. (By default, generated during installation).

## Changelog

Changelog is accessible in the [CHANGELOG.md](CHANGELOG.md) file or in [the release section](https://github.com/Xelzs/mdn-browser-compat-api/releases).