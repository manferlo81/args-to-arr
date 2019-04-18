# args-to-arr

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
