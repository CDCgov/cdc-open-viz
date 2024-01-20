import { ReactElement } from 'react'

export type EditorProps = {
  configUrl: string
  isEditor: boolean
  isDebug: boolean
  config: any
  setConfig: Function
  hostname?: string
  containerEl?: ReactElement
}
