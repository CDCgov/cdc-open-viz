import React from 'react'
import parse from 'html-react-parser'
import './title.styles.css'
import { Visualization } from '../../../types/Visualization'

type HeaderProps = {
  title?: string
  isDashboard?: boolean
  superTitle?: string
  classes?: string[]
  style?: React.CSSProperties
  showTitle?: boolean
  ariaLevel?: number
  config: Visualization
  theme?: string
  titleStyle: 'legacy' | 'large' | 'small'
  noContent?: boolean
}

const Title = (props: HeaderProps) => {
  const {
    config,
    isDashboard,
    title,
    superTitle,
    classes = [],
    showTitle = true,
    ariaLevel = 2,
    titleStyle,
    noContent = false
  } = props

  // Temporary visual verification gate for the legacy title shim.
  const SHOW_SHIM_TITLE = false
  const shimThemeClass = props.theme || config?.theme || 'theme-blue'

  if (titleStyle === 'large' || titleStyle === 'small') {
    const TitleElement = titleStyle === 'large' ? 'h2' : 'h3'

    return (
      title &&
      showTitle && (
        <div
          className={`cove-title cove-title--${titleStyle}${noContent ? ' cove-title--no-content' : ''}`}
          style={props.style}
        >
          {superTitle && <sup>{parse(superTitle)}</sup>}
          <TitleElement>{parse(title)}</TitleElement>
        </div>
      )
    )
  }

  // LEGACY BLOCKY HEADER (Original design with colored backgrounds)
  const updatedClasses = [
    'cove-visualization__title',
    'cove-visualization__header',
    ...(isDashboard ? ['mb-3'] : []),
    ...classes
  ]

  return (
    title &&
    showTitle && (
      <>
        <header className={updatedClasses.join(' ')} style={props.style}>
          {superTitle && <sup>{parse(superTitle)}</sup>}
          <h2>
            {parse(title)} {isDashboard}
          </h2>
        </header>
        {SHOW_SHIM_TITLE && (
          <div className='cove-title__legacy-preview'>
            <header class="cove-component__header component__header theme-blue mb-0"><h2>Medicaid Coverage of Cessation Treatments, 2024-Q2</h2></header>
          </div>
        )}
      </>
    )
  )
}

export default Title
