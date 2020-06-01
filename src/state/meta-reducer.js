const DEFAULT_META_STATE = {
  isLoading: false,
  hasLoaded: false,
  hasErrored: false
}

const metaReducerFactory = (types) => {
  const [requested, succeeded, failed] = types

  return (state = DEFAULT_META_STATE, { type }) => {
    switch (type) {
      case requested:
        return {
          ...DEFAULT_META_STATE,
          isLoading: true
        }
      case succeeded:
        return {
          ...DEFAULT_META_STATE,
          hasLoaded: true
        }
      case failed:
        return {
          ...DEFAULT_META_STATE,
          hasErrored: true
        }
      default:
        return state
    }
  }
}

export {
  DEFAULT_META_STATE,
  metaReducerFactory
}
