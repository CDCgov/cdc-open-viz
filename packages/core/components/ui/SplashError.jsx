import React from 'react'

// Third Party
import PropTypes from 'prop-types'

// Components
import Icon from './Icon'

// Styles
import '../../styles/v2/components/ui/progression.scss'

const SplashError = ({ title = 'Error', message }) => {
  return (
    <section className="cove-splash__waiting">
      <section className="cove-splash__waiting__container">
        {title &&
          <h3 className="cove-heading--2 mb-1">{title}<Icon display="warningTriangle" className="ml-2"/></h3>
        }
        {message}
      </section>
    </section>
  )
}

export default SplashError

SplashError.propTypes = {
  /** Title of the error */
  title: PropTypes.string,
  /** Message of the error */
  message: PropTypes.string
}
