/**
 * Internal dependencies
 */
import { DESERIALIZE, SERIALIZE } from './action-types'

export function createReducer(initialState = null, customHandlers = {}) {
  const defaultHandlers = {
    [SERIALIZE]: () => initialState,
    [DESERIALIZE]: () => initialState,
  }

  const handlers = {
    ...defaultHandlers,
    ...customHandlers,
  }

  const reducer = (state = initialState, action) => {
    const { type } = action

    if (`production` !== process.env.NODE_ENV && 'type' in action && !type) {
      throw new Error(
        `Reducer called with undefined type.` +
          ` Verify that the action type is defined in state/action-types.js`
      )
    }

    if (handlers.hasOwnProperty(type)) {
      return handlers[type](state, action)
    }

    return state
  }

  reducer.hasCustomPersistence = true

  return reducer
}
