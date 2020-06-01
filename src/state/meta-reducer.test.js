import { DEFAULT_META_STATE, metaReducerFactory } from './meta-reducer'

const REQUESTED = 'requested'
const SUCCEEDED = 'succeeded'
const FAILED = 'failed'

describe('meta reducer factory', () => {
  const metaReducer = metaReducerFactory([REQUESTED, SUCCEEDED, FAILED])

  test('handles initialisation', () => {
    const result = metaReducer(DEFAULT_META_STATE, {})

    const expected = {
      isLoading: false,
      hasLoaded: false,
      hasErrored: false
    }

    expect(result).toStrictEqual(expected)
  })

  test('handles request actions', () => {
    const result = metaReducer(DEFAULT_META_STATE, { type: REQUESTED })

    const expected = {
      isLoading: true,
      hasLoaded: false,
      hasErrored: false
    }

    expect(result).toStrictEqual(expected)
  })

  test('handles success actions', () => {
    const result = metaReducer(DEFAULT_META_STATE, { type: SUCCEEDED })

    const expected = {
      isLoading: false,
      hasLoaded: true,
      hasErrored: false
    }

    expect(result).toStrictEqual(expected)
  })

  test('handles failure actions', () => {
    const result = metaReducer(DEFAULT_META_STATE, { type: FAILED })

    const expected = {
      isLoading: false,
      hasLoaded: false,
      hasErrored: true
    }

    expect(result).toStrictEqual(expected)
  })
})
