import React from 'react'

import iconClose from '../../assets/icon-close.svg'
import iconQuestion from '../../assets/question-circle.svg'
import iconLink from '../../assets/link.svg'
import iconUpload from '../../assets/upload-solid.svg'
import iconFileUpload from '../../assets/file-upload-solid.svg'

import '../../styles/v2/components/icon.scss'

const Icon = ({display = null, alt = '', size, ...attributes}) => {

  const iconList = {
    "close": iconClose,
    "question": iconQuestion,
    "link": iconLink,
    "upload": iconUpload,
    "fileUpload": iconFileUpload,
    "warning": "",
    "info": ""
  }

  let IconObj = null

  if (display) {
    IconObj = iconList[display]
  }

  return (
    <span className={`cove-icon${attributes.className ? ' ' + attributes.className : ''}`} style={{ width: size ? size + 'px' : null}}>
      <IconObj title={alt} />
    </span>
  )
}

export default Icon
