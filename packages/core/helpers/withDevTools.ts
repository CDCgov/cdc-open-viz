// This package hooks into the Redux Dev Tools extension
// It works as a wrapper for any reducer function

// Based on: https://github.com/MacKentoch/react-bootstrap-webpack-starter/blob/master/front/src/contexts/withDevTools/index.ts

// types
type DevToolsMessageType = 'DISPATCH' | string

type DevToolsMessagePayload = {
  type?: string
  state?: any
}

type DevToolsMessage = {
  type?: DevToolsMessageType
  payload?: DevToolsMessagePayload
}

type Action = {
  type: string
  payload?: any
}

// the only method the devToolsWrapper hooks into is .send()
// all other type definitions are kept for reference.
// it's possible there's a DevTools type in the Redux library
// however this allows us to avoid another dependency as this project
// doesn't use Redux.
type DevTools = {
  init: () => void
  connect: () => any
  subscribe: (message: DevToolsMessage) => any
  send: (action: Action, newState: any) => any
  unsubscribe: () => any
  dispatch: (action: Action) => any
  disconnect: () => any
}

// constants
const withDevTools = typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION__
const devTools: DevTools = !withDevTools ? null : (window as any).__REDUX_DEVTOOLS_EXTENSION__.connect()
export const devToolsStore = !withDevTools ? null : devTools

export const devToolsWrapper =
  <StateType, ActionTypes>(_reducer: (s: StateType, a: ActionTypes) => StateType) =>
  (state: StateType, action: ActionTypes): StateType => {
    const newState = _reducer(state, action)
    devToolsStore?.send(action as Action, newState)
    return newState
  }
