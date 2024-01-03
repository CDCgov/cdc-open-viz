import React from 'react'
import parse from 'html-react-parser'
import './Title.scss'

type HeaderProps = {
  title?: string
  isDashboard?: boolean
  superTitle?: string
  classes?: string[]
  style?: React.CSSProperties
  showTitle?: boolean
  ariaLevel?: number
}

const Title = (props: HeaderProps) => {
  const { isDashboard, title, superTitle, classes = [], showTitle = true, ariaLevel = 2 } = props

  // standard classes every vis should have
  const updatedClasses = ['cove-component__header', 'component__header', ...classes]

  return (
    title &&
    showTitle && (
      <header className={updatedClasses.join(' ')} aria-hidden='true' style={props.style} aria-level={ariaLevel}>
        {superTitle && <sup>{parse(superTitle)}</sup>}
        <div>
          {parse(title)} {isDashboard}
        </div>
      </header>
    )
  )
}

export default Title
