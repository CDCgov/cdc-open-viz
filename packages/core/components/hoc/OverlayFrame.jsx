// Store
import { useGlobalStore } from '../../stores/globalStore'

import Overlay from '../ui/Overlay'

const OverlayFrame = () => {
  const { overlay } = useGlobalStore()
  return (
    <Overlay disableBgClose={overlay?.disableBgClose}>
      { overlay?.object }
    </Overlay>
  )
}

export default OverlayFrame
