import { useEffect, useRef } from 'react'
import parse from 'html-react-parser'

// Store
import { useGlobalStore } from '../stores/globalStore'
import { useConfigStore } from '../stores/configStore'

// Styles
import '../styles/v2/components/component.scss'

const Component = (props) => {
  const { setDimensions } = useGlobalStore()
  const { config } = useConfigStore()
  const { className, children, ...attributes } = props

  // Observe changes to component container sizes for use with SVG renders
  const outerContainerRef = useRef()

  useEffect(() => {
    if (outerContainerRef.current === typeof 'Element') {
      const outerContainerObserver = new ResizeObserver((entries, observer) => {
        for (let entry of entries) {
          let { width, height } = entry.contentRect
          setDimensions({ width, height })
        }
      })
      outerContainerObserver.observe(outerContainerRef.current)
    }
    // return () => {}
  })


  // Component Attributes
  const customBorderAttrs = config.visual.border !== 'default' && { 'data-border': config.visual.border }
  const customShadowAttrs = !config.visual.shadow && { 'data-shadow': false }
  // config.visual.accent !== 'default' && (config.visual.accent === 'top' && !title ) && { 'data-accent': config.visual.accent }
  const customAccentAttrs = () => {
    if (config.visual.accent === 'default' || (config.visual.accent === 'top' && config.title)) return {}
    return { 'data-accent': config.visual.accent }
  }

  const customComponentAttrs = {
    ...attributes,
    ...customBorderAttrs,
    ...customShadowAttrs,
    ...customAccentAttrs()
  }

  // Component Content Attributes
  const customBgAttrs = config.visual.background !== 'default' && { 'data-bg': config.visual.background }

  const customContentAttrs = {
    ...customBgAttrs
  }

  // Return Component
  return (
    <div className={'cove-component' + (config.theme ? ' cove-theme--' + config.theme : ' cove-theme--blue') + (className ? ' ' + className : '')} {...customComponentAttrs}>
      <div className="cove-component__container">
        {config.title &&
          <header className="cove-component__header" role="heading" aria-hidden="true" aria-level={2}>
            {parse(config.title)}
          </header>
        }
        <div className="cove-component__content" {...customContentAttrs}>
          <div className="cove-component__visualization" ref={outerContainerRef}>
            {children}
          </div>
          {config.description &&
            <div className="cove-component__description">{parse(config.description)}</div>
          }
          {config.tableShowIf && config.table}
        </div>
      </div>
    </div>
  )
}

export default Component
