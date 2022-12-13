import React from 'react'

import { useGlobalContext } from '../GlobalContext'

import Overlay from './Overlay'

const OverlayFrame = () => {
  const { overlay } = useGlobalContext()
  return <Overlay disableBgClose={overlay.disableBgClose}>{overlay.object}</Overlay>
}

export default OverlayFrame
