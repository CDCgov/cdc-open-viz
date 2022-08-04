import React, { useCallback } from 'react'
import parse from 'html-react-parser'

//Context
import { useGlobalContext } from '../context/GlobalContext'

//Styles
import '../styles/v2/components/component.scss'

const Component = (props) => {
  const { globalActions } = useGlobalContext()
  const { title, description, table, tableShowIf = true, theme = 'theme-blue', className, children, ...attributes } = props

  // Observe changes to component container sizes for use with SVG renders
  const outerContainerRef = useCallback(node => {
    const resizeComponentObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        let { width, height } = entry.contentRect

        globalActions.setGlobalContext(context => ({ ...context, dimensions: { width, height } }))
      }
    })
    if (node !== null) resizeComponentObserver.observe(node)
  }, [])

  return (
    <div className={'cove-component' + (className ? ' ' + className : '')} {...attributes}>
      {title &&
        <header className={`cove-component__header ${theme}`} role="heading" aria-hidden="true" aria-level={2}>
          {parse(title)}
        </header>
      }
      <div className="cove-component__content">
        <div className="cove-component__visualization" ref={outerContainerRef}>
          {children}
        </div>
        {description &&
          <div className="cove-component__description">{parse(description)}</div>
        }
        {tableShowIf && table}
      </div>
    </div>
  )
}

export default Component
