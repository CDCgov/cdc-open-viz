import { useEffect, useId, useState } from 'react'
import { VizFilter } from '../../../types/VizFilter'

type TabsProps = {
  filter: VizFilter
  index: number
  changeFilterActive: Function
  theme: string
}

const Tabs: React.FC<TabsProps> = ({ filter, index: outerIndex, changeFilterActive, theme }) => {
  const [selectedFilter, setSelectedFilter] = useState<EventTarget>(null)

  const id = useId()

  useEffect(() => {
    if (selectedFilter) {
      const el = document.getElementById(selectedFilter.id)
      if (el) el.focus()
    }
  }, [selectedFilter])

  const getClassList = value => {
    const isActive = filter.active === value
    let classList = []
    switch (filter.filterStyle) {
      case 'tab bar':
        classList = ['button__tab-bar', isActive && 'button__tab-bar--active']
        break
      case 'pill':
        classList = ['pill', isActive && 'pill--active', theme && theme]
        break
      default:
        const tabSimple = filter.filterStyle === 'tab-simple' && 'tab--simple'
        classList = ['tab', isActive && 'tab--active', theme && theme, tabSimple]
        break
    }
    return classList.filter(Boolean).join(' ')
  }

  const Tabs = filter.values.map((value, index) => {
    return (
      <button
        key={`${value}-${outerIndex}-${index}-${id}`}
        id={`${value}-${outerIndex}-${index}-${id}`}
        className={getClassList(value)}
        onClick={e => {
          changeFilterActive(outerIndex, value)
          setSelectedFilter(e.target)
        }}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            changeFilterActive(outerIndex, value)
            setSelectedFilter(e.target)
          }
        }}
      >
        {value}
      </button>
    )
  })

  switch (filter.filterStyle) {
    case 'tab bar':
      return <section className='single-filters__tab-bar'>{Tabs}</section>
    case 'tab-simple':
      return <div className='tab-simple-container d-flex w-100'>{Tabs}</div>
    case 'pill':
      return (
        <>
          {Tabs.map((Tab, index) => (
            <div className='pill__wrapper' key={`pill-${index}`}>
              {Tab}
            </div>
          ))}
        </>
      )
    default:
      return <>{Tabs}</>
  }
}

export default Tabs
