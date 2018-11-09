[![Coverage Status](https://coveralls.io/repos/github/wking-io/safe-prop/badge.svg?branch=master)](https://coveralls.io/github/wking-io/safe-prop?branch=master)

# safe-prop

A micro-library for safe handling of object properties using the Either ADT from `data.either`.

## API

You can review the API below or take an interactive look in [CodeSandbox](https://codesandbox.io/s/x2xy3nzl9w)

### `safeProp(prop, obj)`

```js
// safeProp : String -> Object -> Either Error Value
import { safeProp } from 'safe-prop';

const obj = { value: 1, empty: null };

safeProp("fake", obj);  // Either.Left(`The property "fake" does not exist on the passed in object.`)
safeProp("empty", obj); // Either.Left(`The value for the property "empty" is either null or undefined on the passed in object.`)
safeProp("value", obj); // Either.Right(1)
```

Safely check if prop exists on object. Returns `Either.Left` if it doesn't exists or the value of the property is Nullable and `Either.Right` with the value of the property if it does.

### `safePath([..props], obj)`

```js
// safeProp : Array String -> Object -> Either Error Value
import { safePath } from 'safe-prop';

const obj = { one: { two: { value: 1, empty: null } } };

safeProp(["fake"], obj);  // Either.Left(`The property "fake" does not exist on the passed in object.`)
safeProp(["one", "three", "value"], obj);  // Either.Left(`The property "three" does not exist on the passed in object.`)
safeProp(["one", "two", "empty"], obj); // Either.Left(`The value for the property "empty" is either null or undefined on the passed in object.`)
safeProp(["one", "two", "value"], obj); // Either.Right(1)
```

Safely check if nested prop exists on path for an object. Returns `Either.Left` if the path doesn't exists or the value of the property is Nullable and `Either.Right` with the value of the property if it does.