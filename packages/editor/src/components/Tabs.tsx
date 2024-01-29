import { useContext, useState } from 'react'
import ConfigContext, { EditorDispatchContext } from '../ConfigContext'

export const GlobalTabs = props => {
  const { globalActive } = useContext(ConfigContext)
  const dispatch = useContext(EditorDispatchContext)
  const setActiveTab = index => {
    dispatch({ type: 'EDITOR_SET_GLOBALACTIVE', payload: index })
  }
  return <TabsComponent {...props} setActiveTab={setActiveTab} activeTab={globalActive} />
}

const Tabs = ({ children, className = undefined, startingTab }) => {
  const [activeTab, setActiveTab] = useState<number>(startingTab)
  return (
    <TabsComponent className={className} setActiveTab={setActiveTab} activeTab={activeTab}>
      {children}
    </TabsComponent>
  )
}

type TabProps = { children; className?: string; activeTab: number; setActiveTab: (index: number) => void }
const TabsComponent: React.FC<TabProps> = ({ children, className, activeTab, setActiveTab }) => {
  const handleActiveTab = (disabled, index) => {
    if (!disabled) {
      setActiveTab(index)
    }
  }

  let containerClassName = 'tabs'

  if (className) {
    containerClassName = `tabs ${className}`
  }

  const tabs = children.map(({ props }, i) => {
    let classes = 'nav-item'

    let disabled = props.disableRule || false

    if (disabled) {
      classes += ' disabled'
    }

    if (i === activeTab) {
      classes += ' active'
    }

    return (
      <li onClick={() => handleActiveTab(disabled, i)} key={props.title} className={classes}>
        {props.icon}
        {props.title}
      </li>
    )
  })

  return (
    <>
      <nav className={containerClassName}>
        <ul className='nav nav-fill'>{tabs}</ul>
      </nav>
      {children[activeTab]}
    </>
  )
}

export default Tabs
