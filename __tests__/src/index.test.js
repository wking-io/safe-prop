import { describe } from 'riteway'
import { safeProp, safePath } from '../src/index'

describe('safePath()', async assert => {
  assert({
    given: 'no arguments',
    should: 'return Nothing',
    actual: safePath().isNothing,
    expected: true
  })

  assert({
    given: 'non array path',
    should: 'return Nothing',
    actual: safePath('three', {}).isNothing,
    expected: true
  })

  assert({
    given: 'empty object',
    should: 'return Nothing',
    actual: safePath(['one', 'two', 'three'], {}).isNothing,
    expected: true
  })

  assert({
    given: 'Non Object',
    should: 'return Nothing',
    actual: safePath(['one', 'two', 'three'], 0).isNothing,
    expected: true
  })

  const wrongObj = { three: { two: { one: 1 } } }

  assert({
    given: 'Object without path',
    should: 'return Nothing',
    actual: safePath(['one', 'two', 'three'], wrongObj).isNothing,
    expected: true
  })

  const rightObj = { one: { two: { three: 1 } } }

  assert({
    given: 'Object with path',
    should: 'return Just',
    actual: safePath(['one', 'two', 'three'], rightObj).isJust,
    expected: true
  })
})

describe('safeProp()', assert => {
  assert({
    given: 'no arguments',
    should: 'return Nothing',
    actual: safeProp().isNothing,
    expected: true
  })

  assert({
    given: 'non string prop',
    should: 'return Nothing',
    actual: safeProp(0, {}).isNothing,
    expected: true
  })

  assert({
    given: 'empty object',
    should: 'return Nothing',
    actual: safeProp('one', {}).isNothing,
    expected: true
  })

  assert({
    given: 'Non Object',
    should: 'return Nothing',
    actual: safeProp('one', 0).isNothing,
    expected: true
  })

  const wrongObj = { three: 1 }

  assert({
    given: 'Object without prop',
    should: 'return Nothing',
    actual: safeProp('one', wrongObj).isNothing,
    expected: true
  })

  const rightObj = { one: 1 }

  assert({
    given: 'Object with prop',
    should: 'return Just',
    actual: safeProp('one', rightObj).isJust,
    expected: true
  })
})
