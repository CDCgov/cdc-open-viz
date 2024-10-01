import React from 'react'
import parse from 'html-react-parser'
import './Title.scss'

type TitleProps = {
  title?: string
  isDashboard?: boolean
  superTitle?: string
  classes?: string[]
  style?: React.CSSProperties
  showTitle?: boolean
  ariaLevel?: number
}

const Title: React.FC<TitleProps> = props => {
  const { config, isDashboard, title, superTitle, classes = [], showTitle = true, ariaLevel = 2 } = props

  const getVizTitleClasses = classes => {
    switch (config.type) {
      case 'map':
        return [
          'map-title',
          config.general.showTitle === true ? 'visible' : 'hidden',
          `${config.general.headerColor}`,
          'cove-component__header',
          ...classes
        ]
      case 'chart':
        return ['chart-title', `${config.theme}`, 'cove-component__header', ...classes]
      default:
        return ['chart-title', `${config.theme}`, 'cove-component__header', ...classes]
    }
  }

  // standard classes every vis should have
  const updatedClasses = getVizTitleClasses(classes)

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
