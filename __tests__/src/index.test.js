import { describe } from 'riteway'
import { safeProp, safePath } from '../../src/index'

describe('safePath()', async assert => {
  assert({
    given: 'no arguments',
    should: 'return Left',
    actual: safePath()().isLeft,
    expected: true
  })

  assert({
    given: 'non array path',
    should: 'return Left',
    actual: safePath('three', {}).isLeft,
    expected: true
  })

  assert({
    given: 'empty object',
    should: 'return Left',
    actual: safePath(['one', 'two', 'three'], {}).isLeft,
    expected: true
  })

  assert({
    given: 'Non Object',
    should: 'return Left',
    actual: safePath(['one', 'two', 'three'], 0).isLeft,
    expected: true
  })

  const wrongObj = { three: { two: { one: 1 } } }

  assert({
    given: 'Object without path',
    should: 'return Left',
    actual: safePath(['one', 'two', 'three'], wrongObj).isLeft,
    expected: true
  })

  const rightObj = { one: { two: { three: 1 } } }

  assert({
    given: 'Object with path',
    should: 'return Right',
    actual: safePath(['one', 'two', 'three'], rightObj).isRight,
    expected: true
  })
})

describe('safeProp()', async assert => {
  assert({
    given: 'no arguments',
    should: 'return Left',
    actual: safeProp()().isLeft,
    expected: true
  })

  assert({
    given: 'non string prop',
    should: 'return Left',
    actual: safeProp(0, {}).isLeft,
    expected: true
  })

  assert({
    given: 'empty object',
    should: 'return Left',
    actual: safeProp('one', {}).isLeft,
    expected: true
  })

  assert({
    given: 'Non Object',
    should: 'return Left',
    actual: safeProp('one', 0).isLeft,
    expected: true
  })

  const wrongObj = { three: 1 }

  assert({
    given: 'Object without prop',
    should: 'return Left',
    actual: safeProp('one', wrongObj).isLeft,
    expected: true
  })

  const rightObj = { one: 1 }

  assert({
    given: 'Object with prop',
    should: 'return Right',
    actual: safeProp('one', rightObj).isRight,
    expected: true
  })
})
