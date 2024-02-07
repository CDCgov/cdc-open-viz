import { WCMSProps } from '@cdc/core/types/WCMSProps'
import { Dispatch, createContext } from 'react'
import EditorActions from './store/editor.actions'
import { EditorState } from './store/editor.reducer'

export type EditorCTX = WCMSProps &
  EditorState & {
    displayName?: string
    setTempConfig: Function
  }

const ConfigContext = createContext<EditorCTX>({ displayName: 'ConfigContext', setTempConfig: () => {} } as unknown as EditorCTX)

export default ConfigContext
export const EditorDispatchContext = createContext<Dispatch<EditorActions>>(() => {})
