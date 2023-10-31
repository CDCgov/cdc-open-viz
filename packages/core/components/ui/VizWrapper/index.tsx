import React, { PropsWithChildren, useContext } from 'react'
import './VizWrapper.scss'
import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'

type VizWrapperProps = PropsWithChildren<{
  config: any
}>

const VizWrapper = (props: VizWrapperProps) => {
  const { config } = props

  let contentClasses = ['cove-component__content']

  if (config?.visualizationType === 'Spark Line' || config?.visualizationType === 'chart') {
    if (config?.title && config?.showTitle) contentClasses.push('component--has-title')
  }
  config?.title && config?.visualizationType !== 'chart' && config?.visualizationType !== 'Spark Line' && contentClasses.push('component--has-title')

  config?.showTitle && contentClasses.push('component--has-title')
  !config?.visual?.border && contentClasses.push('no-borders')
  config?.visualizationType === 'Spark Line' && contentClasses.push('sparkline')
  config?.visual?.borderColorTheme && contentClasses.push('component--has-borderColorTheme')
  config?.visual?.accent && contentClasses.push('component--has-accent')
  config?.visual?.background && contentClasses.push('component--has-background')
  config?.visual?.hideBackgroundColor && contentClasses.push('component--hideBackgroundColor')

  return (
    <div className={contentClasses.join(' ')} {...props}>
      {props.children}
    </div>
  )
}

export default VizWrapper
