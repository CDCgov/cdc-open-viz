import React, { useContext, useState } from 'react'
import ConfigContext from '../../../ConfigContext'
import './AnnotationDropdown.styles.css'
import Icon from '@cdc/core/components/ui/Icon'
import Annotation from '..'

const AnnotationDropdown = () => {
  const { currentViewport: viewport, config } = useContext(ConfigContext)
  const [expanded, setExpanded] = useState(false)

  const limitHeight: React.CSSProperties = {
    maxHeight: config.table.limitHeight ? `${config.table.height}px` : undefined,
    overflowY: 'auto'
  }

  const handleAccordionClassName = () => {
    const classNames = ['data-table-heading', 'data-table-heading--toggle', 'annotation__dropdown-list', 'p-3']
    if (!expanded) {
      classNames.push('collapsed')
    }

    return classNames.join(' ')
  }

  return (
    <>
      <section className={`data-table-container ${viewport} w-100`}>
        <button
          type='button'
          className={handleAccordionClassName()}
          aria-expanded={expanded}
          onClick={() => {
            setExpanded(currentExpanded => !currentExpanded)
          }}
        >
          <Icon display={expanded ? 'minus' : 'plus'} base />
          {config.general.annotationDropdownText === '' ? 'Annotations' : config?.general?.annotationDropdownText}
        </button>
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
