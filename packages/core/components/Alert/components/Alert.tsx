import Icon from '../../ui/Icon'

import DOMPurify from 'dompurify'
import React, { useEffect } from 'react'

import './Alert.styles.css'

type AlertProps = {
  // type of alert for styling the alert box
  type?: 'success' | 'danger' | 'info'
  // message to display in the alert box
  message?: React.ReactNode
  // size of the icon in the alert box
  iconSize?: number
  // heading for the alert box
  heading?: string
  // dismiss function
  onDismiss?: Function
  // make the alert dismiss on it's own
  autoDismiss?: boolean
  // set seconds until autoDismiss, default is 5 seconds
  secondsBeforeDismiss?: number
  // provide option for non dismissable alert
  showCloseButton?: boolean
}

const Alert: React.FC<AlertProps> = ({
  type = 'info',
  message = '',
  iconSize = 21,
  heading,
  onDismiss,
  autoDismiss,
  secondsBeforeDismiss = 5,
  showCloseButton = true
}) => {
  // sanitize the text for setting dangerouslySetInnerHTML

  useEffect(() => {
    if (autoDismiss) {
      setTimeout(() => onDismiss(), secondsBeforeDismiss * 1000)
    }
  }, [])

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(typeof message === 'string' ? message : '')
  })

  // reset styles to avoid conflicts in wcms
  const styleResets = { width: 'unset', height: 'unset', paddingRight: '5px' }

  return (
    <div className={`alert alert-${type} p-1 d-flex justify-content-between`} role='alert'>
      <div className='d-flex'>
        {heading && <h4 className='alert-heading'>{heading}</h4>}
        {type === 'success' && <Icon display='check' size={iconSize} />}
        {type === 'danger' && <Icon display='warningCircle' size={iconSize} />}
        {type === 'info' && <Icon display='info' size={iconSize} />}
        {typeof message === 'string' ? (
          <span dangerouslySetInnerHTML={sanitizedData()} />
        ) : (
          <div className='alert-message'>{message}</div>
        )}
      </div>
      {showCloseButton && (
        <button type='button' className='close ps-5' aria-label='Close' onClick={() => onDismiss()}>
          X
        </button>
      )}
    </div>
  )
}

export default Alert
