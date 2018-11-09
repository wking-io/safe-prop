import { curry, isString, capitalize, hasProp, isObject } from './utils'
import Either from 'data.either'

export const safeProp = curry((prop, obj) => {
  if (prop === null) {
    return Either.Left(`You are missing the property argument for this function.`)
  }

  if (obj === null) {
    return Either.Left(`You are missing the object argument for this function.`)
  }

  if (isString(prop) === false) {
    return Either.Left(`All object property accessors must be of type string: ${prop} is a ${capitalize(typeof prop)}.`)
  }

  if (isObject(obj) === false) {
    return Either.Left(``)
  }

  if (hasProp(obj, prop) === false) {
    return Either.Left(`The property "${prop}" does not exist on the passed in object.`)
  }

  return Either.fromNullable(obj[prop]).leftMap(() => `The value for the property "${prop}" is either null or undefined on the passed in object.`)
})

export const safePath = curry((props, obj) => {
  if (props === null) {
    return Either.Left(`You are missing the property path argument for this function.`)
  }

  if (obj === null) {
    return Either.Left(`You are missing the object argument for this function.`)
  }

  if (Array.isArray(props) === false) {
    return Either.Left(`The property path argument must be an array. You passed in: ${capitalize(typeof props)}.`)
  }

  if (isObject(obj) === false) {
    return Either.Left(``)
  }

  return props.reduce((acc, prop) => acc.chain(safeProp(prop)), Either.Right(obj))
})
