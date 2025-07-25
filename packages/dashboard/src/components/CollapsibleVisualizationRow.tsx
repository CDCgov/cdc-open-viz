import React, { useState, useEffect } from 'react'
import Icon from '../../../core/components/ui/Icon'
import { APP_FONT_SIZE } from '@cdc/core/helpers/constants'

type CollapsableVizRow = {
  allExpanded: boolean
  children: React.ReactNode
  groupName: string
  currentViewport: string
}
const CollapsibleVisualizationRow: React.FC<CollapsableVizRow> = ({
  allExpanded,
  groupName,
  currentViewport,
  children
}) => {
  const [isExpanded, setIsExpanded] = useState(allExpanded)
  const titleFontSize = ['xs', 'xxs'].includes(currentViewport) ? '13px' : `${APP_FONT_SIZE}px`

  useEffect(() => {
    setIsExpanded(allExpanded)
  }, [allExpanded])

  return (
    <div className='collapsable-multiviz-container'>
      <div
        style={{ fontSize: titleFontSize }}
        role='button'
        className={`multi-visualiation-heading${isExpanded ? '' : ' collapsed'} h4 my-0`}
        onClick={() => {
          setIsExpanded(!isExpanded)
        }}
        tabIndex={0}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            setIsExpanded(!isExpanded)
          }
        }}
      >
        <Icon display={isExpanded ? 'minus' : 'plus'} base />
        {groupName}
      </div>
      {isExpanded && children}
    </div>
  )
}

export default CollapsibleVisualizationRow
