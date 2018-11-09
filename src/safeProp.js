import { curry } from './utils'
import Maybe from 'data.maybe'

export const safeProp = curry((prop, obj) => {
  if (prop === null || obj === null) {
    return Maybe.Nothing()
  }
})

export const safePath = curry((prop, obj) => {
  if (prop === null || obj === null) {
    return Maybe.Nothing()
  }
})
