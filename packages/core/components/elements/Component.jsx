import React from 'react'
import parse from 'html-react-parser'

import '../../styles/v2/layout/component.scss'

const Component = (props) => {
  const { title, description, table, tableShowIf = true, theme, className, children } = props

  return (
    <div className={'cove-component' + (className ? ' ' + className : '')}>
      {title &&
        <header className={`cove-component__header ${theme}`} role="heading" aria-hidden="true" aria-level={2}>
          {parse(title)}
        </header>
      }
      <div className="cove-component__content">
        {children}
        {description &&
          <div className="cove-component__description">{parse(description)}</div>
        }
        {tableShowIf && table}
      </div>
    </div>
  )
}

export default Component
