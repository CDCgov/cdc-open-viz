import React from 'react'

// Components
import Label from '../elements/Label'

// Styles
import '../../styles/components/ui/section-wrapper.scss'

const SectionWrapper = ({ label, tooltip, children }) => {
  return (
    <div className="cove-section-wrapper" style={label ? { paddingTop: '0.75rem' } : null}>
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
