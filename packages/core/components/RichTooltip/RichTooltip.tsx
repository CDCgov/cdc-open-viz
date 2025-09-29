import React from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import './richTooltip.css'

const RichTooltip = ({ linkText, href = null, tooltipOpacity = 100, tooltipContent }) => {
  return (
    <>
      <a
        className='tooltip-link'
        data-tooltip-content={tooltipContent}
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
          background: `rgba(255, 255, 255, ${tooltipOpacity})`,
          color: 'var(--cool-gray-90)',
          padding: '9px 18px',
          boxShadow: '0px 2px 2px rgba(28, 29, 31, 0.45)',
          maxWidth: '239px',
          fontSize: 'var(--filter-label-font-size)',
          fontFamily: 'var(--app-font-main)',
          borderRadius: '4px'
        }}
      />
    </>
  )
}

export default RichTooltip
