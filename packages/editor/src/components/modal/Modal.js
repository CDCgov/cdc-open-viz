import React, { useEffect } from 'react'
// import FocusLock from "react-focus-lock";
import ReactDOM from 'react-dom'
import CloseIcon from '../../assets/icons/close.svg'

export const Modal = ({ isShown, hide, modalContent, headerText }) => {
  const onKeyDown = event => {
    if (event.keyCode === 27 && isShown) {
      hide()
    }
  }

  useEffect(() => {
    isShown ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset')
    document.addEventListener('keydown', onKeyDown, false)
    return () => {
      document.removeEventListener('keydown', onKeyDown, false)
    }
  }, [isShown])

  const modal = (
    <>
      <div className='modal-backdrop' onClick={hide} />
      {/* <FocusLock> */}
      <div className='modal-wrapper' aria-modal aria-labelledby={headerText} tabIndex={-1} role='dialog'>
        <div className='modal'>
          <div className='modal-header'>
            <strong>{headerText}</strong>
            <CloseIcon className='modal-close' onClick={hide} />
          </div>
          <div className='modal-content'>{modalContent}</div>
        </div>
      </div>
      {/* </FocusLock> */}
    </>
  )

  return isShown ? ReactDOM.createPortal(modal, document.body) : null
}
