import React from 'react'

import { useGlobalStore } from '../stores/globalStore'

const View = ({ children }) => {

  const { viewMode } = useGlobalStore()

  const componentView = () => (
    {...children}
  )

  const editorView = () => (
    {...children}
  )


  switch (viewMode) {
    case 'component':
      return componentView
    case 'editor':
      return editorView
    default:
      return <>No views match the provided view mode.</>
  }
}

export default View
