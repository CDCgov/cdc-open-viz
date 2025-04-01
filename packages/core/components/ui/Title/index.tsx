import React from 'react'
import parse from 'html-react-parser'
import './Title.scss'
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
}

const Title = (props: HeaderProps) => {
  const { isDashboard, title, superTitle, classes = [], showTitle = true, ariaLevel = 2 } = props

  // standard classes every vis should have
  const updatedClasses = ['cove-component__header', 'component__header', 'mb-3', ...classes]

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
