import React from 'react'
import parse from 'html-react-parser'
import { processMarkupVariables } from '@cdc/core/helpers/markupProcessor'
import type { MapConfig } from '../../../types/MapConfig'

type LegendMarkupTextProps = {
  as?: React.ElementType
  children: string
  className?: string
  config: MapConfig
  style?: React.CSSProperties
}

const getLegendMarkupContent = (content: string, config: MapConfig) =>
  parse(
    config.enableMarkupVariables && config.markupVariables?.length > 0
      ? processMarkupVariables(content, config.data || [], config.markupVariables, {
          isEditor: false,
          filters: config.filters || [],
          locale: config.locale,
          dataMetadata: config.dataMetadata
        }).processedContent
      : content
  )

const LegendMarkupText = ({ as: Component = 'p', children, className, config, style }: LegendMarkupTextProps) => {
  if (!children) return null
  const markupContent = getLegendMarkupContent(children, config)

  return (
    <Component className={className} style={style}>
      {markupContent}
    </Component>
  )
}

export default LegendMarkupText
