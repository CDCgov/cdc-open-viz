import React, { useContext, useState } from 'react'
import ConfigContext from '../../../ConfigContext'
import './AnnotationDropdown.styles.css'
import Icon from '@cdc/core/components/ui/Icon'
import Annotation from '..'
import { isMobileAnnotationViewport } from '@cdc/core/helpers/viewports'

const AnnotationDropdown = () => {
  const { currentViewport: viewport, config } = useContext(ConfigContext)
  const [expanded, setExpanded] = useState(false)
  const isMobile = isMobileAnnotationViewport(viewport)

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
    const classes = [`data-table-container`, viewport, `w-100`, 'mt-4']

    // Show dropdown in mobile mode or if explicitly enabled
    if (isMobile || config.general.showAnnotationDropdown) {
      classes.push('d-block')
    } else {
      classes.push('d-none')
    }
    return classes.join(' ')
  }

  return (
    <>
      <section className={handleSectionClasses()}>
        <div
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
            <Annotation.List useBootstrapVisibilityClasses={false} />
          </div>
        )}
      </section>
    </>
  )
}

export default AnnotationDropdown
