import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../ui/Icon'
import Tooltip from '../ui/Tooltip'

import '../../styles/v2/components/element/label.scss'

const Label = ({name, tooltip, style, children, className, ...attributes}) => {

  let styles = {
    cursor: attributes.onClick ? 'pointer' : null,
    ...style
  }

  return (
    <>
      <label className={`cove-label${className ? ' ' + className : ''}`} style={styles} {...attributes}>{children}</label>
      {tooltip && <>
        <Tooltip>
          <Tooltip.Target>
            <Icon display="questionCircle"/>
          </Tooltip.Target>
          <Tooltip.Content>
            {typeof tooltip === 'object'
              ? tooltip
              : typeof tooltip === 'string' && (
                  <p>{tooltip}</p>
            )}
          </Tooltip.Content>
        </Tooltip>
      </>
      }
    </>
  )
}

Label.propTypes = {
  name: PropTypes.string,
  tooltip: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
}

export default Label
