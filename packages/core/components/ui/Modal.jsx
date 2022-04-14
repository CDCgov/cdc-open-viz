import React, { useEffect, useState } from 'react'

import { useGlobalContext } from '../GlobalContext'
import Icon from './Icon'

const ModalHeader = () => null
const ModalContent = () => null

const Modal = ({ children }) => {
  const [ displayModal, setDisplayModal ] = useState(false)
  const [ modalAnimationState, setModalAnimationState ] = useState(null)
  const [ isAnimating, setIsAnimating ] = useState(false)

  const modalHeaderChildren = children.find(el => el.type === ModalHeader)
  const modalContentChildren = children.find(el => el.type === ModalContent)

  let { showModal, actions } = useGlobalContext()

  const toggleModal = (display = false) => {
    actions.setGlobalContextData(context => ({ ...context, showModal: display }))
  }

  let timeoutShow = undefined
  let timeoutAnimateOut = undefined

  useEffect(() => {
    console.log(isAnimating)
    if (showModal === true) {
      if (isAnimating) {
        clearTimeout(timeoutAnimateOut)
      }
      setIsAnimating(true)
      setDisplayModal(true)
      setModalAnimationState('animate-in')
      timeoutShow = setTimeout(() => {
        setModalAnimationState('show')
        setIsAnimating(false)
      }, 750)

    } else {
      if (setDisplayModal) {
        if (isAnimating) {
          clearTimeout(timeoutShow)
        }
        setIsAnimating(true)
        setModalAnimationState('animate-out')
        timeoutAnimateOut = setTimeout(() => {
          setModalAnimationState(null)
          setDisplayModal(false)
          setIsAnimating(false)
        }, 400)
      }
    }
  }, [ showModal ])

  return (
    <>
      {displayModal &&
      <div className={'cove-modal' + (modalAnimationState ? (' ' + modalAnimationState) : '')}>
        <div className="cove-modal__bg" onClick={() => toggleModal(false)}/>
        <div className="cove-modal__wrapper">
          <div className="cove-modal__container">
            <span className="cove-modal--close" onClick={() => toggleModal(false)}>
              <Icon display="close"/>
            </span>
            {modalHeaderChildren &&
            <div className="cove-modal__header">
              {modalHeaderChildren.props.children}
            </div>
            }
            {modalContentChildren &&
            <div className="cove-modal__content">
              {modalContentChildren.props.children}
            </div>
            }
          </div>
        </div>
      </div>
      }
    </>
  )
}

Modal.Header = ModalHeader
Modal.Content = ModalContent

export default Modal
