export function curry (fn) {
  const createRecurser =
    (acc, count) =>
      (...args) =>
        args.length > 0 ? recurse([...acc, ...args], count) : recurse([...acc, null], count)

  const recurse =
    (acc, count) =>
      acc.length < count ? createRecurser(acc, count) : fn.apply(this, acc)

  return createRecurser([], fn.length)
}

export const hasProp = curry((obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop))

export function isString (val) {
  return typeof val === 'string' || val instanceof String
}

export function isObject (value) {
  return value && typeof value === 'object' && value.constructor === Object
}

export function capitalize (val) {
  return val.charAt(0).toUpperCase() + val.slice(1)
}
