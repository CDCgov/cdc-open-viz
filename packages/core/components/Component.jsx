import React, { useCallback } from 'react'
import parse from 'html-react-parser'

//Context
import { useGlobalContext } from '../context/GlobalContext'

//Styles
import '../styles/v2/components/component.scss'

const Component = (props) => {
  const { globalActions } = useGlobalContext()
  const { title, description, table, tableShowIf = true, theme, className, children } = props

  // Observe changes to outermost container and changes viewport size in state
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {

      let { width, height } = entry.contentRect

      globalActions.setGlobalContextData(context => ({ ...context, dimensions: { width, height } }))
    }
  })

  const outerContainerRef = useCallback(node => {
    if (node !== null) {
      resizeObserver.observe(node)
    }
  }, [])

  return (
    <div className={'cove-component' + (className ? ' ' + className : '')}>
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
