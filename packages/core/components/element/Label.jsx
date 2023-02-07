// Third Party
import parse from 'html-react-parser'
import PropTypes from 'prop-types'

// Components
import Icon from '../ui/Icon'
import Tooltip from '../ui/Tooltip'

// Styles
import '../../styles/v2/components/element/label.scss'

const Label = ({ name, upperCase = true, tooltip, style, children, className, ...attributes }) => {

  let styles = {
    cursor: attributes.onClick ? 'pointer' : null,
    textTransform: upperCase ? 'uppercase' : null,
    ...style
  }

  return (
    <>
      <label htmlFor={ name ? name : null} className={`cove-label${className ? ' ' + className : ''}`} style={styles} {...attributes}>
        {children}
      </label>
      {tooltip && tooltip !== '' && <>
        <Tooltip>
          <Tooltip.Target>
            <Icon display="questionCircle"/>
          </Tooltip.Target>
          <Tooltip.Content>
            {typeof tooltip === 'object'
              ? tooltip
              : typeof tooltip === 'string' && (
              <p>{parse(tooltip)}</p>
            )}
          </Tooltip.Content>
        </Tooltip>
      </>
      }
    </>
  )
}

Label.propTypes = {
  /** Supply the referral name of an input to connect to this label */
  name: PropTypes.string,
  /** Sets the casing for the label */
  upperCase: PropTypes.bool,
  /** All content set between the \<Label\> tags */
  children: PropTypes.any,
  /** Add a tooltip to describe the label's related input's usage; JSX markup can also be supplied */
  tooltip: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  /** Add additional styles to the label as needed */
  style: PropTypes.object
}

export default Label
