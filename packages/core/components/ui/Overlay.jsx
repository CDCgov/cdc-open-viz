import React, { useEffect, useState } from 'react'

import { useGlobalContext } from '../GlobalContext'

import '../../styles/v2/components/overlay.scss'

const Overlay = ({ disableBgClose, children, override = null}) => {
  //Access global modal state
  let { overlay } = useGlobalContext()

  //Set local states
  const [ displayOverlay, setDisplayOverlay ] = useState(false)
  const [ overlayAnimationState, setOverlayAnimationState ] = useState(null)
  const [ overlayErrorState, setOverlayErrorState ] = useState(false)

  //Animate In effect
  useEffect(() => {
    if ((overlay && (overlay?.show === false)) || override?.showModal === false) return //Reject

    setDisplayOverlay(true)
    setOverlayAnimationState('animate-in')

    const timeoutShow = setTimeout(() => {
      setOverlayAnimationState('show')
    }, 750)

    return () => clearTimeout(timeoutShow)
  }, [ overlay?.show, override?.showModal ])

  //Animate Out effect
  useEffect(() => {
    if ((overlay && (overlay?.show === true)) || override?.showModal === true) return //Reject
    console.log('animate out')

    setOverlayAnimationState('animate-out')

    const timeoutHide = setTimeout(() => {
      setOverlayAnimationState(null)
      setDisplayOverlay(false)
    }, 400)

    return () => clearTimeout(timeoutHide)
  }, [ overlay?.show, override?.showModal ])

  //Error animate effect
  useEffect(() => {
    console.log('animate in')
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
             onClick={(e) =>
               disableBgClose ? setOverlayErrorState(true) : overlay ? overlay.actions.toggleOverlay(false) : override ? override.toggleModal(false) : e.preventDefault()
             }
        />
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
