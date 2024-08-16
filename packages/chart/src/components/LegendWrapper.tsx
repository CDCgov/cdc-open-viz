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
    if (config.legend.position === 'bottom') classes = classes.filter(item => item !== 'flex-nowrap')
    return classes.join(' ')
  }

  return <div className={getLegendWrappingClasses()}>{...children}</div>
}

export default LegendWrapper
