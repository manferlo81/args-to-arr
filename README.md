# args-to-arr

[![CircleCI](https://circleci.com/gh/manferlo81/args-to-arr.svg?style=svg)](https://circleci.com/gh/manferlo81/args-to-arr) [![Greenkeeper badge](https://badges.greenkeeper.io/manferlo81/args-to-arr.svg)](https://greenkeeper.io/) [![npm](https://img.shields.io/npm/v/args-to-arr.svg)](https://www.npmjs.com/package/args-to-arr) [![install size](https://packagephobia.now.sh/badge?p=args-to-arr)](https://packagephobia.now.sh/result?p=args-to-arr) [![npm bundle size](https://img.shields.io/bundlephobia/min/args-to-arr.svg)](https://bundlephobia.com/result?p=args-to-arr) [![jsdelivr](https://data.jsdelivr.com/v1/package/npm/args-to-arr/badge?style=rounded)](https://www.jsdelivr.com/package/npm/args-to-arr) [![dependencies Status](https://david-dm.org/manferlo81/args-to-arr/status.svg)](https://david-dm.org/manferlo81/args-to-arr) [![devDependencies Status](https://david-dm.org/manferlo81/args-to-arr/dev-status.svg)](https://david-dm.org/manferlo81/args-to-arr?type=dev) [![npm type definitions](https://img.shields.io/npm/types/args-to-arr.svg)](https://github.com/microsoft/typescript) [![codecov](https://codecov.io/gh/manferlo81/args-to-arr/branch/master/graph/badge.svg)](https://codecov.io/gh/manferlo81/args-to-arr) [![Known Vulnerabilities](https://snyk.io/test/github/manferlo81/args-to-arr/badge.svg?targetFile=package.json)](https://snyk.io/test/github/manferlo81/args-to-arr?targetFile=package.json) [![GitHub](https://img.shields.io/github/license/manferlo81/args-to-arr.svg)](LICENSE)

Converts `arguments` or any other `array-like` object into an `array` starting from specific index.

*Inspired by how Typescript handles `...rest` arguments.*

## Install

```bash
npm i args-to-arr
```

## CDN

### jsDelivr

```html
<script src="https://cdn.jsdelivr.net/npm/args-to-arr@latest/dist/args-to-arr.umd.js"></script>
```

##### for production

```html
<script src="https://cdn.jsdelivr.net/npm/args-to-arr@latest/dist/args-to-arr.umd.min.js"></script>
```

*[more options...](https://www.jsdelivr.com/package/npm/args-to-arr?version=latest)*

### unpkg

```html
<script src="https://unpkg.com/args-to-arr@latest/dist/args-to-arr.umd.js"></script>
```

##### for production

```html
<script src="https://unpkg.com/args-to-arr@latest/dist/args-to-arr.umd.min.js"></script>
```

*[more options...](https://unpkg.com/args-to-arr@latest/)*

## Usage

### Node.js

```javascript
const toArray = require("args-to-arr");
const array = toArray(arrayLike, start);
```

### Browser

*After adding the* `script` *tag,* `toArray` *function will be available globally.*

```javascript
const array = toArray(arrayLike, start);
```

## Reference

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

###### syntax

```typescript
toArray<T>(arr: ArrayLike<T>, start: number = 0): T[];
```

##### return
*type*: `Array`

*It returns a new array based on the provided parameters.*

##### arr
*type*: `Array` | `ArrayLike`

*Array or Array-like object to be converted to a new array.*

##### start
*type*: `number`
*default*: `0`

*Index number for array convertion to start from. If not provided or it equals* `null` *or* `undefined` *it will default to* `0`*.*

*Providing a negative start index will cause the function to start iterating* `X` *items from the end of the array, see the following example.*

###### example

```javascript
const array = toArray([1, 2, 3, 4], -2);
console.log(array);
```
```console
[ 3, 4 ]
```

*If the provided negative start index exceeds the size of the array, it will fill the begining of the resulting array with* `empty` *values.*

###### example

```javascript
const array = toArray([1, 2], -4);
console.log(array);
```
```console
[ <2 empty items>, 1, 2 ]
```

## License

[MIT](LICENSE) &copy; [Manuel Fernández](https://github.com/manferlo81)
