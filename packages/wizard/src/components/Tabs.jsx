import React, { Children, useState, useEffect } from 'react'

import '../scss/cove-tabs.scss'

//Define the "slots" to be populated by subcomponents
const TabsContent = () => null

const Tabs = ({ children, startingTab = 0, className, changeTab = null, fullsize, ...attributes }) => {

  const [ active, setActive ] = useState(startingTab)

  const setActiveTab = (disabled, index) => {
    if (false === disabled) {
      setActive(index)
    }
  }

  //Parse, organize, and pull "slotted" children data from subcomponents
  const childNodes = Children.toArray(children)
  const tabsContentChildren = childNodes.filter(child => child?.type === TabsContent)

  const tabList = children.map(({ props }, i) => {
    let disabled = props.disableRule || false

    let classes = ''
    classes += fullsize ? ' cove-tabs__tab--fullsize' : ''
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

  useEffect(() => {
    if (startingTab > -1) {
      setActive(startingTab)
    }
  }, [ startingTab ])

  return (
    <>
      <nav className={`cove-tabs${tabsClassList}`} {...attributes}>
        <div className="cove-tabs__list" role="tablist">
          {tabList}
        </div>
      </nav>
      {tabsContentChildren &&
        <div className="cove-tabs-content">
          {tabsContentChildren[active].props.children}
        </div>
      }
    </>
  )
}

//Create subcomponents as "slots" within component namespace
Tabs.Content = TabsContent

export default Tabs
