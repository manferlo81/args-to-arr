# args-to-arr

[![CircleCI](https://circleci.com/gh/manferlo81/args-to-arr.svg?style=svg)](https://circleci.com/gh/manferlo81/args-to-arr) [![Greenkeeper badge](https://badges.greenkeeper.io/manferlo81/args-to-arr.svg)](https://greenkeeper.io/) [![codecov](https://codecov.io/gh/manferlo81/args-to-arr/branch/master/graph/badge.svg)](https://codecov.io/gh/manferlo81/args-to-arr)

Arguments to array, the easy way

## Install

```sh
npm install args-to-arr
```

## Usage

#### Syntax

```typescript
toArray<T>(arr: ArrayLike<T>, start?: number): T[];
```

> *Note that* `args-to-arr` *supports any array-like object*

#### Example

```javascript
import toArray from "args-to-arr";


function anything(firstArg) {

  // convert arguments to array
  // starting from argument 1
  const args = toArray(arguments, 1);

  // do something with the array

}
```

## License

MIT License
