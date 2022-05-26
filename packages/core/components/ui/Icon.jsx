import React from 'react'
import PropTypes from 'prop-types'

import iconClose from '../../assets/icon-close.svg'
import iconQuestion from '../../assets/question-circle.svg'
import iconLink from '../../assets/link.svg'
import iconUpload from '../../assets/upload-solid.svg'
import iconFileUpload from '../../assets/file-upload-solid.svg'
import iconWarning from '../../assets/icon-warning.svg'
import iconInfo from '../../assets/icon-info.svg'

import '../../styles/v2/components/icon.scss'

const iconHash = {
  "close": iconClose,
  "question": iconQuestion,
  "link": iconLink,
  "upload": iconUpload,
  "fileUpload": iconFileUpload,
  "warning": iconWarning,
  "info": iconInfo
}

const Icon = ({ display = null, base, alt = '', size, color, style, ...attributes }) => {
  const IconObj = iconHash[display] || null

  const filteredAttrs = { ...attributes }
  delete filteredAttrs.className

  const styles = {
    ...style,
    color: color ? color : null,
    width: size ? size + 'px' : null
  }

  return (
    <>
      {base
        ? <IconObj title={alt}/>
        : (
          <span className={`cove-icon${attributes.className ? ' ' + attributes.className : ''}`} style={styles} {...filteredAttrs}>
            <IconObj title={alt}/>
          </span>
        )
      }
    </>
  )
}

Icon.propTypes = {
  /* Define the icon to display */
  display: PropTypes.oneOf(Object.keys(iconHash)),
  /* Returns icon data as plain svg */
  base: PropTypes.bool,
  /* Sets alt text for the icon */
  alt: PropTypes.string,
  /* Override the width of the icon (scales height proportionally)*/
  size: PropTypes.number,
  /* Override the color of the icon */
  color: PropTypes.string
}

export default Icon
