import React, { useState, useEffect } from 'react'

import '../scss/cove-tabs.scss'

const Tabs = ({ children, startingTab = 0, className, changeTab = null }) => {
  const [ active, setActive ] = useState(startingTab)

  const setActiveTab = (disabled, index) => {
    if (false === disabled) {
      setActive(index)
    }
  }

  useEffect(() => {
    if (startingTab > -1) {
      setActive(startingTab)
    }
  }, [ startingTab ])

  const tabList = children.map(({ props }, i) => {
    let disabled = props.disableRule || false

    let classes = ''
    classes += disabled ? ' disabled' : ''
    classes += i === active ? ' active' : ''

    return (
      <button
        className={`cove-tabs__tab${classes}`}
        onClick={() => setActiveTab(disabled, i)}
        role="tab"
        key={i}
      >
        {props.icon}
        {props.title}
      </button>
    )
  })

  const tabsClassList = className ? ' ' + className : ''

  return (
    <>
      <nav className={`cove-tabs${tabsClassList}`}>
        {/* tabs tab-list */}
        <div className="cove-tabs__list" role="tablist">
          {/* nav nav-fill*/}
          {tabList}
        </div>
      </nav>
      {children[active]}
    </>
  )
}

export default Tabs
