import React from 'react'

import iconClose from '../../assets/icon-close.svg'
import iconQuestion from '../../assets/question-circle.svg'

const Icon = (props) => {
  const { display, alt = '', size } = props

  const iconList = {
    "close": iconClose,
    "question": iconQuestion,
    "warning": "",
    "info": ""
  }

  let IconObj = null

  if (display) {
    IconObj = iconList[display]
  }

  return (
    <span className="cove-icon" style={{ width: size ? size + 'px' : null}}>
      <IconObj title={alt} />
    </span>
  )
}

export default Icon
