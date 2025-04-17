import React from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import './TooltipLink.css'

const TooltipLink = ({ linkText, href = null, tooltipOpacity = 100 }) => {
  return (
    <>
      <a
        className='tooltip-link'
        data-tooltip-content='Data is
               suppressed to maintain statistical reliability.
                This occurs when the number of respondents or 
                reported values does not meet the minimum
                 reporting threshold.'
        data-tooltip-id='supression-tooltip'
        href={href}
      >
        {linkText}
      </a>

      <ReactTooltip
        id='supression-tooltip'
        place='top'
        effect='solid'
        variant='light'
        style={{
          background: `rgba(255,255,255, ${tooltipOpacity})`,
          color: 'black',
          padding: '9px 18px',
          boxShadow: '0px 2px 2px rgba(28, 29, 31, 0.45)',
          maxWidth: '239px',
          borderRadius: '4px'
        }}
      />
    </>
  )
}

export default TooltipLink
