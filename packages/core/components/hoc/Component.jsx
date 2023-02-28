import React, { useEffect, useRef } from 'react'

// Third Party
import parse from 'html-react-parser'
import PropTypes from 'prop-types'

// Store
import useGlobalStore from '../../stores/globalStore'
import useConfigStore from '../../stores/configStore'

// Components
import Icon from '../ui/Icon'
import Tooltip from '../ui/Tooltip'

// Styles
import '../../styles/v2/components/component.scss'

const Component = ({ className, children, exampleConfig, ...attributes }) => {
  // Store Selectors
  const setDimensions = useGlobalStore(state => state.setDimensions)

  const { config, updateConfig } = useConfigStore()

  // Provide an example configObj for documentation purposes
  useEffect(() => {
    if (exampleConfig) updateConfig(exampleConfig)
  }, [ exampleConfig ])

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
    return () => {
    }
  })

  // Component Attributes
  const customBorderAttrs = config.visual?.border !== 'default' && { 'data-border': config.visual?.border }
  const customShadowAttrs = !config.visual?.shadow && { 'data-no-shadow': true }
  // config.visual.accent !== 'default' && (config.visual.accent === 'top' && !title ) && { 'data-accent': config.visual.accent }
  const customAccentAttrs = () => {
    if (config.visual?.accent === 'none' || (config.visual?.accent === 'top' && config.title)) return {}
    return { 'data-accent': config.visual?.accent }
  }

  const customComponentAttrs = {
    ...attributes,
    ...customBorderAttrs,
    ...customShadowAttrs,
    ...customAccentAttrs()
  }

  // Component Content Attributes
  const customBgAttrs = config.visual?.background !== 'default' && { 'data-bg': config.visual?.background }

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
            {config.tooltip && config.tooltip !== '' && <>
              <Tooltip place="left">
                <Tooltip.Target>
                  <Icon display="questionCircle"/>
                </Tooltip.Target>
                <Tooltip.Content>
                  {typeof config.tooltip === 'object'
                    ? config.tooltip
                    : typeof config.tooltip === 'string' && (
                    <p>{parse(config.tooltip)}</p>
                  )}
                </Tooltip.Content>
              </Tooltip>
            </>
            }
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

Component.propTypes = {
  /** All content set between the \<Component\> tags */
  children: PropTypes.any,
  /** Additional classes to be appended to the component */
  className: PropTypes.string,
  config: PropTypes.shape({
    theme: PropTypes.oneOf([ 'blue', 'purple', 'brown', 'teal', 'pink', 'orange', 'slate', 'indigo', 'cyan', 'green', 'amber' ]),
    /** Set a custom title for the component; defaults to a `config.title` entry for the component config */
    title: PropTypes.string,
    description: PropTypes.string,
    visual: PropTypes.shape({
      border: PropTypes.oneOf([ 'default', 'theme', 'none' ]),
      background: PropTypes.oneOf([ 'default', 'theme', 'none' ]),
      shadow: PropTypes.bool,
      accent: PropTypes.oneOf([ 'none', 'top', 'right', 'bottom', 'left' ])
    })
  })
}

export default Component
