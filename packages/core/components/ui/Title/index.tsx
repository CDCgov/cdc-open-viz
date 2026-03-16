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
    isDashboard,
    title,
    superTitle,
    classes = [],
    showTitle = true,
    ariaLevel = 2,
    titleStyle,
    noContent = false
  } = props

  if (titleStyle === 'large' || titleStyle === 'small') {
    const TitleElement = titleStyle === 'large' ? 'h2' : 'h3'

    return (
      title &&
      showTitle && (
        <div
          className={`cove-title cove-visualization__title cove-title--${titleStyle}${noContent ? ' cove-title--no-content' : ''}`}
          style={props.style}
        >
          {superTitle && <sup>{parse(superTitle)}</sup>}
          <TitleElement>{parse(title)}</TitleElement>
        </div>
      )
    )
  }

  // LEGACY BLOCKY HEADER (Original design with colored backgrounds)
  const updatedClasses = ['cove-visualization__title', 'cove-visualization__header', ...(isDashboard ? ['mb-3'] : []), ...classes]

  return (
    title &&
    showTitle && (
      <header className={updatedClasses.join(' ')} style={props.style}>
        {superTitle && <sup>{parse(superTitle)}</sup>}
        <h2>
          {parse(title)} {isDashboard}
        </h2>
      </header>
    )
  )
}

export default Title
