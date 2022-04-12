import React, { useEffect, useState } from 'react'

import { useGlobalContext } from '../GlobalContext'
import Icon from './Icon'

const ModalHeader = () => null
const ModalContent = () => null

const Modal = ({ children }) => {
  const [ displayModal, setDisplayModal ] = useState(false)
  const [ modalState, setModalState ] = useState(null)

  const modalHeaderChildren = children.find(el => el.type === ModalHeader)
  const modalContentChildren = children.find(el => el.type === ModalContent)

  let { modal, globalActions } = useGlobalContext()

  const toggleModal = () => {
    globalActions.setModalDisplay(!modal.show)
  }


  useEffect(() => {
    if (modal.show === true) {
      setDisplayModal(true)
      setModalState('animating')

      setTimeout(() => {
        setModalState(null)
      }, 500)
    } else if (modal.show === false) {
      if (setDisplayModal) {
        setModalState('animating')
        setTimeout(() => {
          setModalState(null)
          setDisplayModal(false)
        }, 500)
      }
    }
  }, [ modal?.show ])

  return (
    <>
      {displayModal &&
      <div className={'cove-modal' + (modalState ? ' ' + modalState : '') + (modal.show ? ' show' : '')}>
        <div className="cove-modal__bg"/>
        <div className="cove-modal__wrapper">
          <div className="cove-modal__container">
            <span onClick={() => toggleModal()}>
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
