import React, { Children, useEffect, useState } from 'react'

import { useGlobalContext } from '../GlobalContext'
import Icon from './Icon'

//Define the "slots" to be populated by subcomponents
const ModalHeader = () => null
const ModalContent = () => null
const ModalFooter = () => null

const Modal = ({
                 fontTheme = 'dark',
                 headerBgColor = '#fff',
                 showDividerTop = true,
                 showDividerBottom = true,
                 showClose = true,
                 disableBgClose = false,
                 children
               }) => {
  //Access global modal state
  let { modal } = useGlobalContext()

  //Set local states
  const [ displayModal, setDisplayModal ] = useState(false)
  const [ modalAnimationState, setModalAnimationState ] = useState(null)

  //Parse, organize, and pull "slotted" children data from subcomponents
  const childNodes = Children.toArray(children)
  const modalHeaderChildren = childNodes.find(child => child.type === ModalHeader)
  const modalContentChildren = childNodes.find(child => child.type === ModalContent)
  const modalFooterChildren = childNodes.find(child => child.type === ModalFooter)

  //Modal computed style options
  const dividerBorder = (position) => {
    return !position ? 'none' : null
  }

  //Animate In effect
  useEffect(() => {
    if (modal.showModal === false) return //Reject

    setDisplayModal(true)
    setModalAnimationState('animate-in')

    const timeoutShow = setTimeout(() => {
      setModalAnimationState('show')
    }, 750)

    return () => clearTimeout(timeoutShow)
  }, [ modal.showModal ])

  //Animate Out effect
  useEffect(() => {
    if (modal.showModal === true) return //Reject

    setModalAnimationState('animate-out')

    const timeoutHide = setTimeout(() => {
      setModalAnimationState(null)
      setDisplayModal(false)
    }, 400)

    return () => clearTimeout(timeoutHide)
  }, [ modal.showModal ])

  //Render output
  return (
    <>
      {displayModal &&
      <div className={`cove-modal cove-modal__theme--${fontTheme}${modalAnimationState ? (' ' + modalAnimationState) : ''}`}>
        <div className="cove-modal__bg" style={{ cursor: disableBgClose ? 'default' : null }}
             onClick={() => disableBgClose ? null : modal.actions.toggleModal(false)}/>
        <div className="cove-modal__wrapper">
          <div className="cove-modal__container">

            {(showClose || modalHeaderChildren) &&
            < div className="cove-modal__header" style={{
              backgroundColor: headerBgColor,
              boxShadow: dividerBorder(showDividerTop),
              padding: !modalHeaderChildren ? '0' : null
            }}>
              {modalHeaderChildren && modalHeaderChildren.props.children}
              {showClose &&
              <button className="cove-modal--close" onClick={() => modal.actions.toggleModal(false)}>
                <Icon display="close"/>
              </button>
              }
            </div>
            }

            <div className="cove-modal__content" style={{ paddingTop: modalHeaderChildren ? null : '0'}}>
              {modalContentChildren && modalContentChildren.props.children}
            </div>

            {modalFooterChildren &&
            <div className="cove-modal__footer" style={{
              boxShadow: dividerBorder(showDividerBottom),
              paddingTop: showDividerBottom ? '1rem' : null
            }}>
              {modalFooterChildren.props.children}
            </div>
            }

          </div>
        </div>
      </div>
      }
    </>
  )
}

//Create subcomponents as "slots" within component namespace
Modal.Header = ModalHeader
Modal.Content = ModalContent
Modal.Footer = ModalFooter

export default Modal
