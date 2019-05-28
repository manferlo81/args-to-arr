# args-to-arr

[![CircleCI](https://circleci.com/gh/manferlo81/args-to-arr.svg?style=svg)](https://circleci.com/gh/manferlo81/args-to-arr) [![Greenkeeper badge](https://badges.greenkeeper.io/manferlo81/args-to-arr.svg)](https://greenkeeper.io/) [![npm](https://img.shields.io/npm/v/args-to-arr.svg)](https://www.npmjs.com/package/args-to-arr) [![install size](https://packagephobia.now.sh/badge?p=args-to-arr)](https://packagephobia.now.sh/result?p=args-to-arr) [![npm bundle size](https://img.shields.io/bundlephobia/min/args-to-arr.svg)](https://bundlephobia.com/result?p=args-to-arr) [![jsdelivr](https://data.jsdelivr.com/v1/package/npm/args-to-arr/badge?style=rounded)](https://www.jsdelivr.com/package/npm/args-to-arr) [![dependencies Status](https://david-dm.org/manferlo81/args-to-arr/status.svg)](https://david-dm.org/manferlo81/args-to-arr) [![devDependencies Status](https://david-dm.org/manferlo81/args-to-arr/dev-status.svg)](https://david-dm.org/manferlo81/args-to-arr?type=dev) [![npm type definitions](https://img.shields.io/npm/types/args-to-arr.svg)](https://github.com/microsoft/typescript) [![codecov](https://codecov.io/gh/manferlo81/args-to-arr/branch/master/graph/badge.svg)](https://codecov.io/gh/manferlo81/args-to-arr) [![Known Vulnerabilities](https://snyk.io/test/github/manferlo81/args-to-arr/badge.svg?targetFile=package.json)](https://snyk.io/test/github/manferlo81/args-to-arr?targetFile=package.json) [![GitHub](https://img.shields.io/github/license/manferlo81/args-to-arr.svg)](LICENSE)

Arguments to array, the easy way

## Install

```bash
npm i args-to-arr
```

## CDN

### jsDelivr

*[www.jsdelivr.com](https://www.jsdelivr.com)*

```html
<script src="https://cdn.jsdelivr.net/npm/args-to-arr/dist/args-to-arr.umd.js"></script>
```

##### for production

```html
<script src="https://cdn.jsdelivr.net/npm/args-to-arr/dist/args-to-arr.umd.min.js"></script>
```

*[more options...](https://www.jsdelivr.com/package/npm/args-to-arr)*

### unpkg

*[unpkg.com](https://unpkg.com)*

```html
<script src="https://unpkg.com/args-to-arr/dist/args-to-arr.umd.js"></script>
```

*[more options...](https://unpkg.com/args-to-arr/)*

## Usage

###### syntax

```typescript
toArray<T>(arr: ArrayLike<T>, start: number = 0): T[];
```

> *Note that* `args-to-arr` *supports any* `array-like` *object*

###### example

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
