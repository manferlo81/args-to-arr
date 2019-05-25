# args-to-arr

[![CircleCI](https://circleci.com/gh/manferlo81/args-to-arr.svg?style=svg)](https://circleci.com/gh/manferlo81/args-to-arr) [![Greenkeeper badge](https://badges.greenkeeper.io/manferlo81/args-to-arr.svg)](https://greenkeeper.io/) [![npm](https://img.shields.io/npm/v/args-to-arr.svg)](https://www.npmjs.com/package/args-to-arr) [![](https://data.jsdelivr.com/v1/package/npm/args-to-arr/badge?style=rounded)](https://www.jsdelivr.com/package/npm/args-to-arr) [![dependencies Status](https://david-dm.org/manferlo81/args-to-arr/status.svg)](https://david-dm.org/manferlo81/args-to-arr) [![devDependencies Status](https://david-dm.org/manferlo81/args-to-arr/dev-status.svg)](https://david-dm.org/manferlo81/args-to-arr?type=dev) [![codecov](https://codecov.io/gh/manferlo81/args-to-arr/branch/master/graph/badge.svg)](https://codecov.io/gh/manferlo81/args-to-arr) [![Known Vulnerabilities](https://snyk.io/test/github/manferlo81/args-to-arr/badge.svg?targetFile=package.json)](https://snyk.io/test/github/manferlo81/args-to-arr?targetFile=package.json) [![GitHub](https://img.shields.io/github/license/manferlo81/args-to-arr.svg)](LICENSE)

Arguments to array, the easy way

## Install

#### npm

```sh
npm install args-to-arr
```

## CDN

#### jsDelivr

```html
<script src="https://cdn.jsdelivr.net/npm/args-to-arr@1/dist/args-to-arr.umd.js"></script>
```

## Usage

#### Syntax

```typescript
toArray<T>(arr: ArrayLike<T>, start: number = 0): T[];
```

> *Note that* `args-to-arr` *supports any array-like object*

#### Example

```javascript
import toArray from "args-to-arr";

function anything(firstArg) {

  // convert arguments to array
  // starting from argument 1
  // it won't include firstArg
  const args = toArray(arguments, 1);

  // do something with the array

}
```

## License

[MIT](LICENSE) &copy; Manuel Fernández
