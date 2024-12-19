import React, { useState, useEffect } from 'react'
import Icon from '../../../core/components/ui/Icon'

type CollapsableVizRow = {
  allExpanded: boolean
  children: React.ReactNode
  fontSize: string
  groupName: string
  currentViewport: string
}
const CollapsibleVisualizationRow: React.FC<CollapsableVizRow> = ({
  allExpanded,
  fontSize,
  groupName,
  currentViewport,
  children
}) => {
  const [isExpanded, setIsExpanded] = useState(allExpanded)
  const fontSizes = { small: 16, medium: 18, large: 20 }
  const titleFontSize = ['xs', 'xxs'].includes(currentViewport) ? '13px' : `${fontSizes[fontSize]}px`

  useEffect(() => {
    setIsExpanded(allExpanded)
  }, [allExpanded])

  return (
    <>
      <div
        style={{ fontSize: titleFontSize }}
        role='button'
        className={`multi-visualiation-heading${isExpanded ? '' : ' collapsed'} h4`}
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
    </>
  )
}

export default CollapsibleVisualizationRow
