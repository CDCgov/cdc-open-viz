// Third Party
import PropTypes from 'prop-types'

// Styles
import '../../styles/v2/components/ui/alert.scss'

const AlertBox = ({ type = 'basic', inline = false, children, className, attributes }) => {
  return (
    <div className={
        `cove-alert cove-alert--${type}`
        + (inline ? ' cove-alert--inline' : '')
        + (className ? ' ' + className : '')
      } {...attributes}>
      {children}
    </div>
  )
}

AlertBox.propTypes = {
  /** Set the visual color theme of the alert box */
  type: PropTypes.oneOf([ 'basic', 'info', 'success', 'error', 'caution' ]),
  /** Displays the alert inline */
  inline: PropTypes.bool,
  /** All content set between the \<AlertBox\> tags */
  children: PropTypes.any
}

export default AlertBox
