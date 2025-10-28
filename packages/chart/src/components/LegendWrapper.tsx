import React, { useContext } from 'react'
import ConfigContext from '../ConfigContext'

import { isLegendWrapViewport } from '@cdc/core/helpers/viewports'

type LegendWrapperProps = {
  children: React.ReactNode
}

const LegendWrapper: React.FC<LegendWrapperProps> = props => {
  const { children } = props

  const { config, currentViewport } = useContext(ConfigContext)

  const getLegendWrappingClasses = () => {
    let classes = ['legend-wrapper', 'd-flex', 'flex-nowrap', 'w-100']
    const { legend } = config
    if (legend.position === 'bottom' || legend.position === 'top' || isLegendWrapViewport(currentViewport)) {
      classes = classes.filter(item => item !== 'flex-nowrap')
      classes.push('flex-wrap')
    }
    return classes.join(' ')
  }

  return <div className={getLegendWrappingClasses()}>{children}</div>
}

export default LegendWrapper
