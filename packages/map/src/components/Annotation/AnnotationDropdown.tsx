import React, { useContext, useState } from 'react'
import ConfigContext from '../../context'
import './AnnotationDropdown.styles.css'
import Icon from '@cdc/core/components/ui/Icon'
import { fontSizes } from '@cdc/core/helpers/cove/fontSettings'
import AnnotationList from './AnnotationList'

const AnnotationDropdown = () => {
  const { currentViewport: viewport, state: config } = useContext(ConfigContext)
  const [expanded, setExpanded] = useState(false)

  const titleFontSize = ['sm', 'xs', 'xxs'].includes(viewport) ? '13px' : `${fontSizes[config?.fontSize]}px`

  const annotations = config?.annotations || []

  const limitHeight = {
    maxHeight: config.table.limitHeight && `${config.table.height}px`,
    OverflowY: 'scroll'
  }

  const handleAccordionClassName = () => {
    const classNames = ['data-table-heading', 'annotation__dropdown-list']
    if (!expanded) {
      classNames.push('collapsed')
    }

    return classNames.join(' ')
  }

  const handleSectionClasses = () => {
    const classes = [`data-table-container`, viewport, `d-block`, `d-lg-none`]

    if (config.general.showAnnotationDropdown) {
      classes.push('d-lg-block')
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
            if (e.keyCode === 13) {
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