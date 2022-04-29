import React, { useEffect, useState } from 'react'

import { useGlobalContext } from '../GlobalContext'

import '../../styles/v2/components/overlay.scss'

const Overlay = ({ disableBgClose, children }) => {
  //Access global modal state
  let { overlay } = useGlobalContext()

  //Set local states
  const [ displayOverlay, setDisplayOverlay ] = useState(false)
  const [ overlayAnimationState, setOverlayAnimationState ] = useState(null)
  const [ overlayErrorState, setOverlayErrorState ] = useState(false)

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

  //Error animate effect
  useEffect(() => {
    if (overlayErrorState === false) return //Reject

    const timeoutHide = setTimeout(() => {
      setOverlayErrorState(false)
    }, 400)

    return () => clearTimeout(timeoutHide)
  }, [ overlayErrorState ])

  //Render output
  return (
    <>
      {displayOverlay &&
      <div className={`cove-overlay ${overlayAnimationState ? (' ' + overlayAnimationState) : ''}${overlayErrorState ? ' overlay-error' : ''}`}>
        <div className="cove-overlay__bg" style={{ cursor: disableBgClose ? 'default' : null }}
             onClick={() => disableBgClose ? setOverlayErrorState(true) : overlay.actions.toggleOverlay(false)}/>
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
