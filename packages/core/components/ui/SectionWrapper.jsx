import React from 'react'

// Components
import Label from '../element/Label'

// Styles
import '../../styles/v2/components/ui/section-wrapper.scss'

const SectionWrapper = ({ label, tooltip, className, children }) => {
  return (
    <div className={`cove-section-wrapper` + (className ? ' ' + className : '')} style={label ? { paddingTop: '0.75rem' } : null}>
      <div className="cove-section-wrapper__container" style={label ? { paddingTop: '1.25rem' } : null}>
        {label &&
          <div className="cove-section-wrapper__label">
            <Label className="mb-0" tooltip={tooltip}>{label}</Label>
          </div>
        }
        {children}
      </div>
    </div>
  )
}

export default SectionWrapper
