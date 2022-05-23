import React from 'react'
import PropTypes from 'prop-types'

const InputGroup = ({ text, flow, children, className, ...attributes }) => {

  const groupText = <div className="cove-input-group__text">{text}</div>
  console.log(children)

  return (
    <div className={`cove-input-group${className ? ' ' + className : ''}`} {...attributes}>
      {text ? <>
          {'left' === flow && <> {groupText}{children} </>}
          {'right' === flow && <> {children}{groupText} </>}
          {'center' === flow && children.length > 1 && <> {children[0]}{groupText}{children[1]} </>}
        </> :
        children
      }
    </div>
  )
}

InputGroup.propTypes = {
  /* Text to display for the input group */
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  flow: PropTypes.oneOf([ 'left', 'center', 'right' ])
}

export default InputGroup
