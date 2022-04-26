import React, { useEffect, useState } from 'react'

import { useGlobalContext } from '../GlobalContext'

const Overlay = ({ disableBgClose, children }) => {
  //Access global modal state
  let { overlay } = useGlobalContext()

  //Set local states
  const [ displayOverlay, setDisplayOverlay ] = useState(false)
  const [ overlayAnimationState, setOverlayAnimationState ] = useState(null)

  //Animate In effect
  useEffect(() => {
    if (overlay.show === false) return //Reject

    setDisplayOverlay(true)
    setOverlayAnimationState('animate-in')

    const timeoutShow = setTimeout(() => {
      setOverlayAnimationState('show')
    }, 750)

    return () => clearTimeout(timeoutShow)
  }, [ overlay.show ])

  //Animate Out effect
  useEffect(() => {
    if (overlay.show === true) return //Reject

    setOverlayAnimationState('animate-out')

    const timeoutHide = setTimeout(() => {
      setOverlayAnimationState(null)
      setDisplayOverlay(false)
    }, 400)

    return () => clearTimeout(timeoutHide)
  }, [ overlay.show ])

  //Render output
  return (
    <>
      {displayOverlay &&
      <div className={`cove-overlay ${overlayAnimationState ? (' ' + overlayAnimationState) : ''}`}>
        <div className="cove-overlay__bg" style={{ cursor: disableBgClose ? 'default' : null }}
             onClick={() => disableBgClose ? null : overlay.actions.toggleOverlay(false)}/>
        <div className="cove-overlay__wrapper">
          <div className="cove-overlay__container">
            {children}
          </div>
        </div>
      </div>
      }
    </>
  )
}
export default Overlay
