import { ReactElement } from 'react'

export type WCMSProps = {
  config?: any
  configUrl?: string
  isEditor?: boolean
  isDebug?: boolean
  hostname?: string
  containerEl?: ReactElement
  sharepath?: string
}
