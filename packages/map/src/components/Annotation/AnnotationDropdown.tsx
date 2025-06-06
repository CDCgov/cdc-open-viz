import React, { useContext, useState } from 'react'
import ConfigContext from '../../context'
import './AnnotationDropdown.styles.css'
import Icon from '@cdc/core/components/ui/Icon'
import { APP_FONT_SIZE } from '@cdc/core/helpers/constants'
import AnnotationList from './AnnotationList'
import { MapContext } from '../../types/MapContext'

const AnnotationDropdown = () => {
  const { config, currentViewport: viewport } = useContext<MapContext>(ConfigContext)
  const [expanded, setExpanded] = useState(false)

  const titleFontSize = ['sm', 'xs', 'xxs'].includes(viewport) ? '13px' : `${APP_FONT_SIZE}px`

  const limitHeight = {
    maxHeight: config.table.limitHeight && `${config.table.height}px`,
    OverflowY: 'scroll'
  }

  const handleAccordionClassName = () => {
    const classNames = ['data-table-heading', 'annotation__dropdown-list', 'p-3']
    if (!expanded) {
      classNames.push('collapsed')
    }

    return classNames.join(' ')
  }

  const handleSectionClasses = () => {
    const classes = [`data-table-container`, viewport, `d-block`, `d-lg-none`]

    if (config.general.showAnnotationDropdown) {
      classes.push('d-lg-block')
      classes.splice(classes.indexOf('d-lg-none'), 1)
    }
    return classes.join(' ')
  }

  return (
    <>
      <section className={handleSectionClasses()}>
        <div
          style={{ fontSize: titleFontSize }}
          role='button'
          className={handleAccordionClassName()}
          onClick={() => {
            setExpanded(!expanded)
          }}
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              setExpanded(!expanded)
            }
          }}
        >
          <Icon display={expanded ? 'minus' : 'plus'} base />
          {config.general.annotationDropdownText === '' ? 'Annotations' : config?.general?.annotationDropdownText}
        </div>
        {expanded && (
          <div className='table-container annotation-dropdown__panel' style={limitHeight}>
            <AnnotationList useBootstrapVisibilityClasses={false} />
          </div>
        )}
      </section>
    </>
  )
}

export default AnnotationDropdown
