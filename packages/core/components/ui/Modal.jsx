import React, { Children } from 'react'

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
                 children
               }) => {

  //Access global overlay state
  let { overlay } = useGlobalContext()

  //Parse, organize, and pull "slotted" children data from subcomponents
  const childNodes = Children.toArray(children)
  const modalHeaderChildren = childNodes.find(child => child?.type === ModalHeader)
  const modalContentChildren = childNodes.find(child => child?.type === ModalContent)
  const modalFooterChildren = childNodes.find(child => child?.type === ModalFooter)

  //Modal computed style options
  const dividerBorder = (position) => {
    return !position ? 'none' : null
  }

  //Render output
  return (
    <div className={`cove-modal cove-modal__theme--${fontTheme}`}>
      {(showClose || modalHeaderChildren) &&
      <div className="cove-modal__header" style={{
        backgroundColor: headerBgColor,
        boxShadow: dividerBorder(showDividerTop),
        padding: !modalHeaderChildren ? '0' : null
      }}>
        {modalHeaderChildren && modalHeaderChildren.props.children}
        {showClose &&
        <button className="cove-modal--close" onClick={() => overlay.actions.toggleOverlay(false)}>
          <Icon display="close"/>
        </button>
        }
      </div>
      }

      <div className="cove-modal__content" style={{ paddingTop: modalHeaderChildren ? null : '0' }}>
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
  )
}

//Create subcomponents as "slots" within component namespace
Modal.Header = ModalHeader
Modal.Content = ModalContent
Modal.Footer = ModalFooter

export default Modal
