import { useCallback } from 'react'
import parse from 'html-react-parser'

// Store
import { useGlobalStore } from '../stores/globalStore'

// Styles
import '../styles/components/component.scss'
import { useConfigStore } from '../stores/configStore'

const Component = (props) => {
  const { setDimensions } = useGlobalStore()
  const { config } = useConfigStore()
  const { title, description, table, tableShowIf = true, theme = 'cove-theme--blue', className, children, ...attributes } = props

  // Observe changes to component container sizes for use with SVG renders
  const outerContainerRef = useCallback(node => {
    const resizeComponentObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        let { width, height } = entry.contentRect
        setDimensions({ width, height })
      }
    })
    if (node !== null) resizeComponentObserver.observe(node)
  }, [])

  // Component Attributes
  const customBorderAttrs = config.visual.border !== 'default' && { 'data-border': config.visual.border }
  const customShadowAttrs = !config.visual.shadow && { 'data-shadow': false }
  // config.visual.accent !== 'default' && (config.visual.accent === 'top' && !title ) && { 'data-accent': config.visual.accent }
  const customAccentAttrs = () => {
    if (config.visual.accent === 'default' || (config.visual.accent === 'top' && title)) return {}
    return { 'data-accent': config.visual.accent }
  }

  const customComponentAttrs = {
    ...attributes,
    ...customBorderAttrs,
    ...customShadowAttrs,
    ...customAccentAttrs()
  }

  console.log(customComponentAttrs)

  // Component Content Attributes
  const customBgAttrs = config.visual.background !== 'default' && { 'data-bg': config.visual.background }

  const customContentAttrs = {
    ...customBgAttrs
  }

  // Return Component
  return (
    <div className={'cove-component' + (theme ? ' cove-theme--' + theme : '') + (className ? ' ' + className : '')} {...customComponentAttrs}>
      <div className="cove-component__container">
        {title &&
          <header className="cove-component__header" role="heading" aria-hidden="true" aria-level={2}>
            {parse(title)}
          </header>
        }
        <div className="cove-component__content" {...customContentAttrs}>
          <div className="cove-component__visualization" ref={outerContainerRef}>
            {children}
          </div>
          {description &&
            <div className="cove-component__description">{parse(description)}</div>
          }
          {tableShowIf && table}
        </div>
      </div>
    </div>
  )
}

export default Component
