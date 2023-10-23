import React from 'react'
import parse from 'html-react-parser'

type HeaderProps = {
  title?: string
  isDashboard?: boolean
  superTitle?: string
  classes?: string[]
  style: React.CSSProperties
}

export const Header = (props: HeaderProps) => {
  const { isDashboard, title, superTitle, classes = [] } = props

  // standard classes every vis should have
  const updatedClasses = ['cove-component__header', 'component__header', ...classes]

  return (
    title && (
      <header className={updatedClasses.join(' ')} aria-hidden='true' style={props.style}>
        {superTitle && <sup>{parse(superTitle)}</sup>}
        <div>
          {parse(title)} {isDashboard}
        </div>
      </header>
    )
  )
}
