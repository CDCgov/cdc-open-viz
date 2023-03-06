import React, { Children } from 'react'

// Third Party
import PropTypes from 'prop-types'

// Store
import useGlobalStore from '../../store/global/globalSlice'

// Components
import Icon from './Icon'

// Styles
import '../../styles/v2/components/ui/modal.scss'

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
                 children,
                 override = null
               }) => {

  // Store Selectors - Access global overlay state
  let [ overlay, toggleOverlay ] = useGlobalStore(state => [
    state.overlay,
    state.toggleOverlay
  ])

  //Parse, organize, and pull "slotted" children data from subcomponents
  const childNodes = Children.toArray(children)
  const modalHeaderChildren = childNodes.find(child => child?.type === ModalHeader)
  const modalContentChildren = childNodes.find(child => child?.type === ModalContent)
  const modalFooterChildren = childNodes.find(child => child?.type === ModalFooter)

  //Modal computed style options
  const dividerBorder = (bool) => {
    return !bool ? 'none' : null
  }

  //Render output
  return (
    <div className={`cove-modal cove-modal__theme--${fontTheme}`}>
      {(showClose || modalHeaderChildren) &&
        <div className="cove-modal__header" style={{
          backgroundColor: headerBgColor,
          boxShadow: dividerBorder(modalHeaderChildren && showDividerTop),
          padding: !modalHeaderChildren ? '0' : null,
          minHeight: !modalHeaderChildren ? 'unset' : null
        }}>
          {modalHeaderChildren && modalHeaderChildren?.props?.children}
          {showClose &&
            <button className="cove-modal--close"
                    onClick={(e) => {
                      if (overlay) return toggleOverlay(false)
                      e.preventDefault()
                    }}>
              <Icon display="close"/>
            </button>
          }
        </div>
      }

      <div className="cove-modal__content">
        {modalContentChildren && modalContentChildren?.props?.children}
      </div>

      {modalFooterChildren &&
        <div className="cove-modal__footer" style={{
          boxShadow: dividerBorder(showDividerBottom),
          paddingTop: showDividerBottom ? '1rem' : null
        }}>
          {modalFooterChildren?.props?.children}
        </div>
      }
    </div>
  )
}

//Create subcomponents as "slots" within component namespace
Modal.Header = ModalHeader
Modal.Content = ModalContent
Modal.Footer = ModalFooter

Modal.propTypes = {
  fontTheme: PropTypes.oneOf([ 'dark', 'light' ]),
  headerBgColor: PropTypes.string,
  showDividerTop: PropTypes.bool,
  showDividerBottom: PropTypes.bool,
  showClose: PropTypes.bool
}

export default Modal
