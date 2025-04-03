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

  const getClassList = (isActive, value) => {
    const tabSimple = filter.filterStyle === 'tab-simple' ? 'tab--simple' : ''

    switch (filter.filterStyle) {
      case 'tab bar':
        return ['button__tab-bar', filter.active === value ? 'button__tab-bar--active' : '']
      case 'pill':
        return ['pill', isActive ? 'pill--active' : null, theme && theme]
      default:
        return ['tab', isActive && 'tab--active', theme && theme, tabSimple]
    }
  }

  const Tabs = filter.values.map((value, index) => {
    const isActive = filter.active === value

    return (
      <button
        id={`${value}-${outerIndex}-${index}-${id}`}
        className={getClassList(isActive, value).join(' ')}
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
