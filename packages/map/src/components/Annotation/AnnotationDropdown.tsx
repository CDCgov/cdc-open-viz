import React, { useContext, useState } from 'react'
import ConfigContext from '../../context'
import './AnnotationDropdown.styles.css'
import Icon from '@cdc/core/components/ui/Icon'
import AnnotationList from './AnnotationList'
import { MapContext } from '../../types/MapContext'

const AnnotationDropdown = () => {
  const { config, currentViewport: viewport } = useContext<MapContext>(ConfigContext)
  const [expanded, setExpanded] = useState(false)

  const limitHeight = {
    maxHeight: config.table.limitHeight && `${config.table.height}px`,
    OverflowY: 'scroll'
  }

  const handleAccordionClassName = () => {
    const classNames = ['data-table-heading', 'data-table-heading--toggle', 'annotation__dropdown-list', 'p-3']
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
        <button
          type='button'
          className={handleAccordionClassName()}
          onClick={() => {
            setExpanded(currentExpanded => !currentExpanded)
          }}
        >
          <Icon display={expanded ? 'minus' : 'plus'} base />
          {config.general.annotationDropdownText === '' ? 'Annotations' : config?.general?.annotationDropdownText}
        </button>
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
