import { IoMdCheckmarkCircleOutline, IoIosCloseCircle, IoIosInformationCircle } from 'react-icons/io'

import Icon from '../../ui/Icon'

import DOMPurify from 'dompurify'
import React from 'react'

import './Alert.styles.css'

type AlertProps = {
  // type of alert for styling the alert box
  type?: 'success' | 'danger' | 'info'
  // message to display in the alert box
  message?: string
  // size of the icon in the alert box
  iconSize?: number
  // heading for the alert box
  heading?: string
}

const Alert: React.FC<AlertProps> = ({ type = 'info', message = '', iconSize = 21, heading }) => {
  // sanitize the text for setting dangerouslySetInnerHTML
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(message)
  })

  // reset styles to avoid conflicts in wcms
  const styleResets = { width: 'unset', height: 'unset', paddingRight: '5px' }

  return (
    <div className={`alert alert-${type} p-1`} role='alert'>
      {heading && <h4 className='alert-heading'>{heading}</h4>}
      {type === 'success' && <Icon display='check' size={iconSize} />}
      {type === 'danger' && <Icon display='warningCircle' size={iconSize} />}
      {type === 'info' && <Icon display='info' size={iconSize} />}
      <span dangerouslySetInnerHTML={sanitizedData()} />
    </div>
  )
}

export default Alert
