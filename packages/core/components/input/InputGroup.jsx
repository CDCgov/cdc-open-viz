import React, { useState, useLayoutEffect, useRef } from 'react'

// Third Party
import PropTypes from 'prop-types'

const InputGroup = (
  {
    label,
    labelPosition,
    labelTransparent,
    children,
    className,
    style,
    ...attributes
  }
) => {
  const [ groupStyles, setGroupStyles ] = useState({})
  const [ labelWidth, setLabelWidth ] = useState(null)

  const groupLabelRef = useRef(null)
  const groupLabel = <div className="cove-input-group__label" ref={groupLabelRef}>{label}</div>

  useLayoutEffect(() => {
    if (!labelTransparent) return
    if (!groupLabelRef.current) return
    setLabelWidth(groupLabelRef.current.offsetWidth)
  }, [ labelTransparent, groupLabelRef ])

  useLayoutEffect(() => {
    if (!labelTransparent) {
      setGroupStyles(() => ({ paddingLeft: null, paddingRight: null }))
      return
    }
    if ('left' === labelPosition) {
      setGroupStyles(() => ({ paddingLeft: labelWidth + 'px' }))
    }
    if ('right' === labelPosition) {
      setGroupStyles(() => ({ paddingRight: labelWidth + 'px' }))
    }
  }, [ labelTransparent, labelPosition, labelWidth ])

  const labelPositionAttr = (label && labelPosition) && { 'data-label-position': labelPosition }

  const groupClassList = () => {
    let classList = [ 'cove-input-group' ]
    if (labelTransparent) classList.push('cove-input-group--label-transparent')
    if (className) classList.push(className)
    return classList.join(' ')
  }

  return (
    <div className={groupClassList()} style={groupStyles} {...attributes} {...labelPositionAttr}>
      {label && labelPosition
        ? <>
            {'left' === labelPosition && <> {groupLabel}{children} </>}
            {'right' === labelPosition && <> {children}{groupLabel} </>}
            {'center' === labelPosition && <>
              {children.length > 1
                ? <> {children[0]}{groupLabel}{children[1]} </>
                : <> {groupLabel}{children} </>
              }
            </>}
          </>
        : children
      }
    </div>
  )
}

InputGroup.propTypes = {
  /** Add label to apply to the input group */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  /** Position the label relative to the input group. `center` can only be used when two input fields are provided. */
  labelPosition: PropTypes.oneOf([ 'left', 'center', 'right' ]),
  /** Make the label transparent */
  labelTransparent: PropTypes.bool
}

export default InputGroup
