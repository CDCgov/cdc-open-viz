import React from 'react'
import parse from 'html-react-parser'

type SubtextProps = {
  config: any // TODO: type
  currentViewport: string
  description: string
}
const Subtext: React.FC<SubtextProps> = ({ config, currentViewport, description }) => {
  const getChartSubTextClasses = () => {
    const classes = ['subtext ']
    const isLegendOnBottom = config?.legend?.position === 'bottom' || ['sm', 'xs', 'xxs'].includes(currentViewport)

    if (config.isResponsiveTicks) classes.push('subtext--responsive-ticks ')
    if (config.brush?.active && !isLegendOnBottom) classes.push('subtext--brush-active ')
    if (config.brush?.active && config.legend.hide) classes.push('subtext--brush-active ')
    return classes
  }

  return (
    description &&
    config.visualizationType !== 'Spark Line' && (
      <div className={getChartSubTextClasses().join('')}>{parse(description)}</div>
    )
  )
}

export default Subtext
