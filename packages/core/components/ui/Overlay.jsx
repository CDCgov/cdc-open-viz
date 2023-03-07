import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

// Store
import useStore from '../../store/store'

// Styles
import '../../styles/v2/components/ui/overlay.scss'

const Overlay = ({ anchor }) => {
  // Store Selectors - Access global modal state
  let { overlay, toggleOverlay } = useStore()

  let overlayAnchor = anchor === true ? anchor.current : document.body

  // Set local states
  const [ displayOverlay, setDisplayOverlay ] = useState(false)
  const [ overlayAnimationState, setOverlayAnimationState ] = useState(null)
  const [ overlayErrorState, setOverlayErrorState ] = useState(false)

  // Animate In effect
  useEffect(() => {
    if (overlay?.show === undefined) return
    if (overlay?.show === false) return //Reject

    document.body.style.overflow = 'hidden'
    setDisplayOverlay(true)
    setOverlayAnimationState('animate-in')

    const timeoutShow = setTimeout(() => {
      setOverlayAnimationState('show')
    }, 750)

    return () => clearTimeout(timeoutShow)
  }, [ overlay?.show ])

  // Animate Out effect
  useEffect(() => {
    if (overlay?.show === undefined) return
    if (overlay?.show === true) return //Reject

    setOverlayAnimationState('animate-out')

    const timeoutHide = setTimeout(() => {
      setOverlayAnimationState(null)
      setDisplayOverlay(false)
      document.body.style.overflow = null
    }, 400)

    return () => clearTimeout(timeoutHide)
  }, [ overlay?.show ])

  // Animate Error effect
  useEffect(() => {
    if (overlayErrorState === false) return //Reject

    const timeoutHide = setTimeout(() => {
      setOverlayErrorState(false)
    }, 400)

    return () => clearTimeout(timeoutHide)
  }, [ overlayErrorState ])

  // Render Overlay
  return createPortal(<>
    {displayOverlay &&
      <div
        className={`cove cove-overlay${overlayAnimationState ? (' ' + overlayAnimationState) : ''}${overlayErrorState ? ' overlay-error' : ''}`}>
        <div className="cove-overlay__bg" style={{ cursor: overlay?.disableBgClose ? 'default' : null }}
             onClick={(e) => overlay?.disableBgClose
               ? setOverlayErrorState(true)
               : overlay
                 ? toggleOverlay(false)
                 : e.preventDefault()
             }
             role="alert"
        />
        <div className="cove-overlay__wrapper">
          <div className="cove-overlay__container">
            {overlay?.object}
          </div>
        </div>
      </div>
    }
  </>, overlayAnchor)
}
export default Overlay
