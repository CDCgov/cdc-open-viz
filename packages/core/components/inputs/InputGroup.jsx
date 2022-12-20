import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const InputGroup = ({ label, flow, children, clear, className, style, ...attributes }) => {
  const [styles, setStyles] = useState({})
  const [labelWidth, setLabelWidth] = useState(null)

  const groupLabelRef = useRef(null)
  const groupLabel = (
    <div className='cove-input-group__label' ref={groupLabelRef}>
      {label}
    </div>
  )

  useLayoutEffect(() => {
    if (!clear) return
    if (!groupLabelRef.current) return
    setLabelWidth(groupLabelRef.current.offsetWidth)
  }, [clear, groupLabelRef])

  useLayoutEffect(() => {
    if (!clear) return
    if ('left' === flow) {
      setStyles(() => ({ paddingLeft: labelWidth + 'px' }))
    }
    if ('right' === flow) {
      setStyles(() => ({ paddingRight: labelWidth + 'px' }))
    }
  }, [clear, flow, labelWidth])

  return (
    <div className={`cove-input-group${clear ? ' clear' : ''}${className ? ' ' + className : ''}`} flow={flow} {...attributes}>
      {label && flow ? (
        <>
          {'left' === flow && (
            <>
              {' '}
              {groupLabel}
              {children}{' '}
            </>
          )}
          {'right' === flow && (
            <>
              {' '}
              {children}
              {groupLabel}{' '}
            </>
          )}
          {'center' === flow && children.length > 1 && (
            <>
              {' '}
              {children[0]}
              {groupLabel}
              {children[1]}{' '}
            </>
          )}
        </>
      ) : (
        children
      )}
    </div>
  )
}

InputGroup.propTypes = {
  /* Text to display for the input group */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  flow: PropTypes.oneOf(['left', 'center', 'right'])
}

export default InputGroup
