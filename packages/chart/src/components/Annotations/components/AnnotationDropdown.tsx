import React, { useContext, useState } from 'react'
import ConfigContext from '../../../ConfigContext'
import './AnnotationDropdown.styles.css'
import Icon from '@cdc/core/components/ui/Icon'
import Annotation from '..'

const AnnotationDropdown = () => {
  const { currentViewport: viewport, config } = useContext(ConfigContext)
  const [expanded, setExpanded] = useState(false)
  const fontSizes = { small: 16, medium: 18, large: 20 }
  const titleFontSize = ['sm', 'xs', 'xxs'].includes(viewport) ? '13px' : `${fontSizes[config?.fontSize]}px`

  const {
    config: { annotations }
  } = useContext(ConfigContext)

  const limitHeight = {
    maxHeight: config.table.limitHeight && `${config.table.height}px`,
    OverflowY: 'scroll'
  }

  const annotationListItems = annotations.map((annotation, annotationIndex) => {
    return (
      <li key={`annotation-dropdown__li`}>
        <div className='annotation__dropdown-title-wrapper'>
          <div className='annotation__dropdown-title-circle'>{annotationIndex + 1}</div>
        </div>
        <p className='annotation__dropdown-subtext'>{annotation.text}</p>
      </li>
    )
  })

  const handleAccordionClassName = () => {
    const classNames = ['data-table-heading', 'annotation__dropdown-list']
    if (!expanded) {
      classNames.push('collapsed')
    }

    return classNames.join(' ')
  }

  return (
    <>
      <section className={`data-table-container ${viewport} d-none d-md-block`}>
        <div
          style={{ fontSize: titleFontSize }}
          role='button'
          className={handleAccordionClassName()}
          onClick={() => {
            setExpanded(!expanded)
          }}
          tabIndex={0}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              setExpanded(!expanded)
            }
          }}
        >
          <Icon display={expanded ? 'minus' : 'plus'} base />
          Annotation Items
        </div>
        {expanded && (
          <div className='table-container annotation-dropdown__panel' style={limitHeight}>
            <Annotation.List />
          </div>
        )}
      </section>
    </>
  )
}

export default AnnotationDropdown
