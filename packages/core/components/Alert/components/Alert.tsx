import { IoMdCheckmarkCircleOutline, IoIosCloseCircle, IoIosInformationCircle } from 'react-icons/io'
import DOMPurify from 'dompurify'
import React from 'react'

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
    <div className={`alert alert-${type}`} role='alert' style={{ padding: '5px' }}>
      {heading && <h4 className='alert-heading'>{heading}</h4>}
      {type === 'success' && <IoMdCheckmarkCircleOutline size={iconSize} style={styleResets} />}
      {type === 'danger' && <IoIosCloseCircle size={iconSize} style={styleResets} />}
      {type === 'info' && <IoIosInformationCircle size={iconSize} style={styleResets} />}
      <span dangerouslySetInnerHTML={sanitizedData()} />
    </div>
  )
}

export default Alert
