import React, { useContext } from 'react'
import ConfigContext from '../ConfigContext'

type LegendWrapperProps = {
  children: React.ReactNode
}

const LegendWrapper = props => {
  const { children } = props

  const { config } = useContext(ConfigContext)

  const getLegendWrappingClasses = () => {
    let classes = ['legend-wrapper', 'd-flex', 'flex-nowrap', 'w-100']
    const { legend } = config
    if (legend.position === 'bottom' || legend.position === 'top') {
      classes = classes.filter(item => item !== 'flex-nowrap')
      classes.push('flex-wrap')
    }
    return classes.join(' ')
  }

  return <div className={getLegendWrappingClasses()}>{...children}</div>
}

export default LegendWrapper
