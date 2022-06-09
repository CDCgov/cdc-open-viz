import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/v2/components/ui/section-block.scss'

const SectionBlock = ({ children, ...attributes }) => {
  return (
    <fieldset className="cove-section-block" {...attributes}>
      {children}
    </fieldset>
  )
}

SectionBlock.propTypes = {
  /** Children to appear inside the panel block **/
  children: PropTypes.any
}

export default SectionBlock
