import React, { useEffect, useState } from 'react'

import { useGlobalContext } from '../GlobalContext'

import '../../styles/v2/components/overlay.scss'

const Overlay = ({ disableBgClose, children, override = null }) => {
  //Access global modal state
  let { overlay } = useGlobalContext()

  //Set local states
  const [displayOverlay, setDisplayOverlay] = useState(false)
  const [overlayAnimationState, setOverlayAnimationState] = useState(null)
  const [overlayErrorState, setOverlayErrorState] = useState(false)

  const overlayDisplay = override ? override?.show : overlay?.show

  //Animate In effect
  useEffect(() => {
    if (overlayDisplay === undefined) return
    if (overlayDisplay === false) return //Reject

    document.body.style.overflow = 'hidden'
    setDisplayOverlay(true)
    setOverlayAnimationState('animate-in')

    const timeoutShow = setTimeout(() => {
      setOverlayAnimationState('show')
    }, 750)

    return () => clearTimeout(timeoutShow)
  }, [overlayDisplay])

  //Animate Out effect
  useEffect(() => {
    if (overlayDisplay === undefined) return
    if (overlayDisplay === true) return //Reject

    setOverlayAnimationState('animate-out')

    const timeoutHide = setTimeout(() => {
      setOverlayAnimationState(null)
      setDisplayOverlay(false)
      document.body.style.overflow = null
    }, 400)

    return () => clearTimeout(timeoutHide)
  }, [overlayDisplay])

  //Error animate effect
  useEffect(() => {
    if (overlayErrorState === false) return //Reject

    const timeoutHide = setTimeout(() => {
      setOverlayErrorState(false)
    }, 400)

    return () => clearTimeout(timeoutHide)
  }, [overlayErrorState])

  //Render output
  return (
    <>
      {displayOverlay && (
        <div className={`cove-overlay${overlayAnimationState ? ' ' + overlayAnimationState : ''}${overlayErrorState ? ' overlay-error' : ''}`}>
          <div className='cove-overlay__bg' style={{ cursor: disableBgClose ? 'default' : null }} onClick={e => (disableBgClose ? setOverlayErrorState(true) : overlay ? overlay.actions.toggleOverlay(false) : override ? override.actions.toggleOverlay(false) : e.preventDefault())} role='alert' />
          <div className='cove-overlay__wrapper'>
            <div className='cove-overlay__container'>{children}</div>
          </div>
        </div>
      )}
    </>
  )
}
export default Overlay
