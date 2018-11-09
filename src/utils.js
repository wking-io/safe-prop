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
