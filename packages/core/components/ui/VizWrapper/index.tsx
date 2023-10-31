import React, { PropsWithChildren, useContext } from 'react'
import './VizWrapper.scss'
import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'

type VizWrapperProps = PropsWithChildren<{
  config: any
}>

const VizWrapper = (props: VizWrapperProps) => {
  const { config } = props

  const { contentClasses } = useDataVizClasses(config)
  return <div className={contentClasses.join(' ')}>{props.children}</div>
}

export default VizWrapper
