import React from 'react'

// Third Party
import PropTypes from 'prop-types'

// Styles
import '../../styles/components/ui/alert.scss'

const AlertBox = ({type = 'primary', inline = false, children}) => {
  return (
    <div className={`cove-alert cove-alert--${type}`}>
      {children}
    </div>
  )
}

AlertBox.propTypes = {
  type: PropTypes.oneOf([ 'basic', 'info', 'success', 'error', 'caution' ]),
  inline: PropTypes.bool
}

export default AlertBox
