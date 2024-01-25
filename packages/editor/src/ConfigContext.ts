import { EditorProps } from '@cdc/core/types/EditorProps'
import { createContext } from 'react'

type CTX = EditorProps & {
  displayName: string
  setTempConfig: Function
}

const ConfigContext = createContext<CTX>({ displayName: 'ConfigContext' } as CTX)

export default ConfigContext
